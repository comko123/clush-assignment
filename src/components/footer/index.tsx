import { useState } from "react"
import { motion } from "framer-motion"
import { useRecoilState } from "recoil"
import { progessTodo } from "../../atoms/todo"
import { v1 } from "uuid"
import { useNavigate } from "react-router-dom"

const date = new Date()

const Footer = () => {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<todo>({
    title: "",
    body: "",
    important: "",
    startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `,
    endDate: "",
    state: "progess",
    id: ""
  })
  const [progess, setProgess] = useRecoilState(progessTodo)
  const navigate = useNavigate()

  return (
    <>
      {open ? (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <article
            className="absolute bg-black bg-opacity-60 top-0 left-0 w-[100vw] h-[100vh]"
            onClick={() => setOpen(false)}
          />
          <article className=" flex-col flex-center absolute right-[25%] top-[25%] w-[50%] h-[50%] bg-white z-10 rounded-xl">
            <h2 className="my-3 text-2xl border-b-4 border-black w-[95%] flex-center pb-2">
              Add Todo
            </h2>
            <form
              className="flex flex-col size-[80%] *:my-5 *:text-xl"
              onSubmit={e => {
                e.preventDefault()
                setProgess(todo => [state, ...todo])
                sessionStorage.setItem("default", JSON.stringify([state, ...progess]))
                setOpen(false)
                navigate("/")
              }}
            >
              <div className="flex-center">
                <span>제목 :&nbsp;</span>
                <input
                  type="text"
                  className="w-[85%] bg-slate-100"
                  onBlur={e => setState(scale => ({ ...scale, title: e.target.value }))}
                />
              </div>
              <div className="flex-center">
                <span>중요도 :</span>
                {[1, 2, 3, 4, 5].map(item => (
                  <div key={item} className="flex-center mx-2">
                    <input
                      type="radio"
                      name="important"
                      value={item}
                      onClick={() => setState(scale => ({ ...scale, important: item + "" }))}
                    />
                    <div className="mb-[2px] ml-1">{item}</div>
                  </div>
                ))}
              </div>
              <div className="size-full flex justify-center">
                <span> 내용 :&nbsp;</span>
                <textarea
                  maxLength={200}
                  className="resize-none outline-none bg-slate-100 w-[85%] h-[150%] rounded-xl p-2"
                  onBlur={e => setState(scale => ({ ...scale, body: e.target.value }))}
                />
              </div>
              <div className="size-full flex items-end justify-center">
                <input type="submit" value="등록하기" className="bg-blue-500 text-white w-max" />
              </div>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-12 text-red-500 cursor-pointer absolute right-3 top-3"
              onClick={() => setOpen(false)}
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </article>
        </motion.section>
      ) : (
        <footer
          className="bg-slate-100 screen-95pc text-center cursor-pointer hover:opacity-60 mt-3"
          onClick={() => {
            setOpen(true)
            setState(state => ({ ...state, id: v1() }))
          }}
        >
          <input type="button" id="add Todo" value="Add Todo" className="hidden" />
          <label htmlFor="add Todo" className="flex-center w-full h-[7vh]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-xl mx-2">Add Todo</span>
          </label>
        </footer>
      )}
    </>
  )
}

export default Footer
