import { motion } from "framer-motion"
import CloseSvg from "../../closeSvg"
import { change, inspection } from "../../../utils/exchange"
import { useSetRecoilState } from "recoil"
import { progessTodo } from "../../../atoms/todo"
import { lazy, Suspense } from "react"
import ComponentLoading from "../../loading/componentLoading"
import useReload from "../../../hooks/useReload"
const TitleInput = lazy(() => import("../../titleInput"))
const ImportantRadio = lazy(() => import("../../importantRadio"))
const BodyTextarea = lazy(() => import("../../bodyTextarea"))

const DetailCard = ({ state, setState }: addTodo) => {
  const setProgessState = useSetRecoilState(progessTodo)
  useReload()

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
          onClick={() => setState(state => ({ ...state, view: false }))}
        />
        <div className="abs-tl-252 bg-white w-[95vw] md:w-[50vw] h-[32rem] md:h-[30rem] z-20 rounded-xl py-5 px-10">
          <CloseSvg setFn={setState} />

          <h2 className="text-center text-3xl my-2 black-bod-4">
            {state.modify ? (
              <Suspense fallback={<ComponentLoading />}>
                <TitleInput setFn={setState} value={state.item.title} />
              </Suspense>
            ) : (
              <div className=" w-[90%] eclips">{state.item.title}</div>
            )}
          </h2>
          <div className="flex justify-between flex-col md:flex-row *:text-2xl black-bod-4">
            <div>
              <div className="text-base">등록 날짜 : {state.item.startDate}</div>
              <div className="text-base">
                완료 날짜 : {state.item.endDate ? state.item.endDate : "진행중"}
              </div>
            </div>
            <div className="flex ">
              <div className="text-base flex-center">중요도 :&nbsp;</div>
              {state.modify ? (
                <Suspense fallback={<ComponentLoading />}>
                  <ImportantRadio setFn={setState} value={state.item.important} />
                </Suspense>
              ) : (
                <div className="text-base flex-center">{state.item.important}</div>
              )}
            </div>
          </div>
          <div className="text-xl h-[15rem]  break-words overflow-auto  black-bod-4">
            {state.modify ? (
              <Suspense fallback={<ComponentLoading />}>
                <BodyTextarea setFn={setState} value={state.item.body} />
              </Suspense>
            ) : (
              state.item.body
            )}
          </div>
          {state.item.state !== "complete" && (
            <div className="w-full flex-center ">
              <input
                type="button"
                value={state.modify ? "등록하기" : "수정하기"}
                onClick={() => {
                  setState(state => ({ ...state, modify: true }))
                  console.log(state.item)
                  if (state.modify) {
                    if (inspection(state.item)) alert("모든 항목을 입력해주세요.")
                    else {
                      setProgessState(stash => change(stash, state.item.id, state.item))
                      setState(state => ({ ...state, modify: false }))
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
//i아이콘을 눌렀을때 입력한 todo를 팝업으로 자세한 내용을 보여주는 컴포넌트
