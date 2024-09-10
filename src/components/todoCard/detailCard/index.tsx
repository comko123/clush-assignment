import { motion } from "framer-motion"
import CloseSvg from "../../closeSvg"
import { change, inspection } from "../../../utils/exchange"
import { useRecoilState, useSetRecoilState } from "recoil"
import { progessTodo } from "../../../atoms/todo"
import { modify, modifyStash } from "../../../atoms/content"
import { lazy, Suspense, useEffect } from "react"
import ComponentLoading from "../../loading/componentLoading"
const TitleInput = lazy(() => import("../../titleInput"))
const ImportantRadio = lazy(() => import("../../importantRadio"))
const BodyTextarea = lazy(() => import("../../bodyTextarea"))

const DetailCard = ({ setView }: open<boolean>) => {
  const setState = useSetRecoilState(progessTodo)
  const [stateModify, setStateModify] = useRecoilState(modify)
  const [modifyState, setModifyState] = useRecoilState(modifyStash)
  useEffect(() => {
    setStateModify(false)
  }, [setStateModify])

  return (
    <>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="abs-tl-0 w-[110vw] h-[60rem] md:full-brow-five bg-black opacity-60 z-10 overflow-hidden"
          onClick={() => setView(false)}
        />
        <div className="abs-tl-25 bg-white w-[95vw] md:w-[50vw] h-[32rem] md:h-[30rem] z-20 rounded-xl py-5 px-10">
          <CloseSvg setFn={setView} />

          <h2 className="text-center text-3xl my-2 black-bod-4">
            {stateModify ? (
              <Suspense fallback={<ComponentLoading />}>
                <TitleInput setFn={setModifyState} value={modifyState.title} />
              </Suspense>
            ) : (
              <div className="eclips w-[90%]">{modifyState.title}</div>
            )}
          </h2>
          <div className="flex justify-between flex-col md:flex-row *:text-2xl black-bod-4">
            <div>
              <div className="text-base">등록 날짜 : {modifyState.startDate}</div>
              <div className="text-base">
                완료 날짜 : {modifyState.endDate ? modifyState.endDate : "진행중"}
              </div>
            </div>
            <div className="flex ">
              <div className="text-base">중요도 : &nbsp;</div>
              {stateModify ? (
                <Suspense fallback={<ComponentLoading />}>
                  <ImportantRadio setFn={setModifyState} value={modifyState.important} />
                </Suspense>
              ) : (
                <div className="text-base">{modifyState.important}</div>
              )}
            </div>
          </div>
          <div className="text-xl h-[15rem] overflow-auto black-bod-4">
            {stateModify ? (
              <Suspense fallback={<ComponentLoading />}>
                <BodyTextarea setFn={setModifyState} value={modifyState.body} />
              </Suspense>
            ) : (
              modifyState.body
            )}
          </div>
          {modifyState.state !== "complete" && (
            <div className="w-full flex-center ">
              <input
                type="button"
                value={stateModify ? "등록하기" : "수정하기"}
                onClick={() => {
                  setStateModify(true)
                  if (stateModify) {
                    if (inspection(modifyState)) alert("모든 항목을 입력해주세요.")
                    else {
                      setState(stash => change(stash, modifyState.id, modifyState))
                      setStateModify(false)
                    }
                  }
                }}
                className="bg-orange-500 text-white p-w rounded-lg mt-6 cursor-pointer hover:opacity-70 transition-all"
              />
            </div>
          )}
        </div>
      </motion.article>
    </>
  )
}
export default DetailCard
