import { motion } from "framer-motion"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { progessTodo } from "../../atoms/todo"
import TitleInput from "../titleInput"
import ImportantRadio from "../importantRadio"
import BodyTextarea from "../bodyTextarea"
import ProgessSvgBundle from "./progessSvgBundle"
import PublicSvgBuldle from "./publicSvgBuldle"
import CloseSvg from "../closeSvg"
import { change, inspection } from "../../utils/exchange"
const TodoCard = (item: todo) => {
  const [view, setView] = useState(false)
  const [modify, setModify] = useState(false)
  const setState = useSetRecoilState(progessTodo)
  const [modifyState, setModifyState] = useState<todo>(item)

  return (
    <section className="flex flex-col">
      <motion.article
        initial={{ scaleX: 0, x: 0 }}
        animate={{ scaleX: 1 }}
        className="border-4 border-blue-400 flex flex-col p-2 h-[15vh] rounded-xl"
      >
        {/* 컴포넌트 분리후에도 애니메이션이 겹치면 빼기 */}
        <div className="flex justify-between">
          <div className="w-[75%] overflow-hidden text-ellipsis whitespace-nowrap">
            {item.title}
          </div>
          <div className="flex ">
            {item.state !== "complete" && (
              <ProgessSvgBundle
                changeState={modifyState}
                id={item.id}
                setterFn={setModify}
                setFn={setView}
              />
            )}
            <PublicSvgBuldle id={item.id} setFn={setView} state={item.state} />
          </div>
        </div>
        <div className="">중요도 : {item.important}</div>
        <div>등록 날짜 : {item.startDate}</div>
        {item.state === "complete" && <div>완료 날짜 : {item.endDate}</div>}
      </motion.article>

      {view ? (
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

            <h2 className="text-center text-3xl my-2 border-b-4 border-black pb-3">
              {modify ? (
                <TitleInput setFn={setModifyState} value={item.title} />
              ) : (
                <div className="overflow-hidden text-ellipsis whitespace-nowrap w-[90%]">
                  {item.title}
                </div>
              )}
            </h2>
            <div className="flex justify-between *:text-2xl border-b-4 border-black pb-3">
              <div>
                <div>등록 날짜 : {item.startDate}</div>
                <div>완료 날짜 : {item.endDate ? item.endDate : "진행중"}</div>
              </div>
              <div className="flex items-end">
                중요도 :
                {modify ? (
                  <ImportantRadio setFn={setModifyState} value={item.important} />
                ) : (
                  item.important
                )}
              </div>
            </div>
            <div className="text-xl min-h-[45%] max-h-[45%] h-[45%] overflow-auto border-b-4 border-black pb-3">
              {modify ? <BodyTextarea setFn={setModifyState} value={item.body} /> : item.body}
            </div>
            {item.state !== "complete" && (
              <div className="w-full flex-center ">
                <input
                  type="button"
                  value={modify ? "등록하기" : "수정하기"}
                  onClick={() => {
                    setModify(true)
                    if (modify) {
                      if (inspection(modifyState)) alert("모든 항목을 입력해주세요.")
                      else {
                        setState(stash => change(stash, item.id, modifyState))
                        setModify(false)
                      }
                    }
                  }}
                  className="bg-orange-500 text-white p-w rounded-lg mt-6 cursor-pointer hover:opacity-70 transition-all"
                />
              </div>
            )}
          </div>
        </motion.article>
      ) : null}
    </section>
  )
}
export default TodoCard

// svg tooltip
