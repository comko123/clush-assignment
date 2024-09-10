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
          className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-60"
          onClick={() => setView(false)}
        />
        <div className="absolute top-[25%] left-[25%] bg-white w-[50vw] h-[50vh] z-10 rounded-xl py-5 px-10">
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
          <div className="flex justify-between *:text-2xl black-bod-4">
            <div>
              <div>등록 날짜 : {modifyState.startDate}</div>
              <div>완료 날짜 : {modifyState.endDate ? modifyState.endDate : "진행중"}</div>
            </div>
            <div className="flex modifyStates-end">
              중요도 : &nbsp;
              {stateModify ? (
                <Suspense fallback={<ComponentLoading />}>
                  <ImportantRadio setFn={setModifyState} value={modifyState.important} />
                </Suspense>
              ) : (
                modifyState.important
              )}
            </div>
          </div>
          <div className="text-xl h-45 overflow-auto black-bod-4">
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
