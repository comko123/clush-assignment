import { motion } from "framer-motion"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { completeTodo, progessTodo } from "../../atoms/todo"
import { useLocation } from "react-router-dom"
const TodoCard = (item: todo) => {
  const [view, setView] = useState(false)
  const [modify, setModify] = useState(false)
  const setState = useSetRecoilState(progessTodo)
  const [modifyState, setModifyState] = useState<todo>(item)
  const setCompleteState = useSetRecoilState(completeTodo)
  const location = useLocation()
  return (
    <section className="flex flex-col">
      <article className="border-4 border-blue-400 flex flex-col p-2 h-[15vh] rounded-xl">
        <div className="flex justify-between">
          <div>{item.title}</div>
          <div className="flex ">
            <div>
              {location.pathname !== "/complete" && (
                <motion.svg
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-green-500"
                  onClick={() => {
                    if (window.confirm("선택한 항목을 완료항목으로 이동합니다.")) {
                      setState(stash => {
                        const arr = stash.filter(scale => scale.id !== item.id)
                        sessionStorage.setItem("default", JSON.stringify(arr))
                        return arr
                      })
                      setCompleteState(stash => {
                        const arr = [modifyState, ...stash]
                        sessionStorage.setItem("complete", JSON.stringify([...stash]))
                        return arr
                      })
                    }
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              )}

              <motion.svg
                whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-amber-500"
                onClick={() => setView(true)}
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </div>
            <div>
              <motion.svg
                whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-red-500"
                onClick={() => {
                  if (window.confirm("삭제 하시겠습니까?")) {
                    setState(stash => {
                      const arr = stash.filter(scale => scale.id !== item.id)
                      sessionStorage.setItem("default", JSON.stringify(arr))
                      return arr
                    })
                  }
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </motion.svg>

              {location.pathname !== "/complete" && (
                <motion.svg
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-purple-500"
                  onClick={() => {
                    setView(true)
                    setModify(true)
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              )}
            </div>
          </div>
        </div>
        <div className="">중요도 : {item.important}</div>
        <div>등록 날짜 : {item.startDate}</div>
      </article>

      {view ? (
        <article className="">
          <div
            className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-60"
            onClick={() => setView(false)}
          />
          <div className="absolute top-[25%] left-[25%] bg-white w-[50vw] h-[50vh] z-10 rounded-xl py-5 px-10">
            <motion.svg
              whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12 text-red-500 absolute right-[1%] top-[1%]"
              onClick={() => setView(false)}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </motion.svg>

            <h2 className="text-center text-3xl my-2 border-b-4 border-black pb-3">
              {modify ? (
                <input
                  type="text"
                  defaultValue={item.title}
                  onBlur={e => setModifyState((item: todo) => ({ ...item, title: e.target.value }))}
                  className="bg-slate-100"
                />
              ) : (
                item.title
              )}
            </h2>
            <div className="flex justify-between *:text-2xl border-b-4 border-black pb-3">
              <div>
                <div>등록 날짜 : {item.startDate}</div>
                <div>완료 날짜 : {item.endDate ? item.endDate : "진행중"}</div>
              </div>
              <div className="flex items-end">
                중요도 :
                {modify
                  ? [1, 2, 3, 4, 5].map(stash => (
                      <div key={stash} className="flex-center mx-2">
                        <input
                          type="radio"
                          name="important_modify"
                          value={stash}
                          defaultChecked={item.important === stash + ""}
                          onClick={() =>
                            setModifyState(scale => ({ ...scale, important: stash + "" }))
                          }
                        />
                        <div className="mb-[2px] ml-1">{stash}</div>
                      </div>
                    ))
                  : item.important}
              </div>
            </div>
            <div className="text-xl min-h-[45%] max-h-[45%] h-[45%] overflow-auto border-b-4 border-black pb-3">
              {modify ? (
                <textarea
                  defaultValue={item.body}
                  className=" w-full h-full outline-none resize-none bg-slate-100 -mb-2 p-2"
                  onBlur={e => setModifyState((item: todo) => ({ ...item, body: e.target.value }))}
                />
              ) : (
                item.body
              )}
            </div>
            {location.pathname !== "complete" && (
              <div className="w-full flex-center ">
                <input
                  type="button"
                  value={modify ? "등록하기" : "수정하기"}
                  onClick={() => {
                    if (modify) {
                      setState(stash => {
                        const index = stash.findIndex(each => item.id === each.id)
                        const copy = [...stash]
                        copy.splice(index, 1)
                        copy.splice(index, 0, modifyState)
                        sessionStorage.setItem("default", JSON.stringify(copy))
                        return copy
                      })
                    }
                    setModify(state => !state)
                  }}
                  className="bg-orange-500 text-white p-w rounded-lg mt-6 cursor-pointer hover:opacity-70 transition-all"
                />
              </div>
            )}
          </div>
        </article>
      ) : null}
    </section>
  )
}
export default TodoCard

// svg tooltip
