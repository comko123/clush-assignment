import { motion } from "framer-motion"
import { useRecoilState } from "recoil"
import { progessTodo } from "../../../atoms/todo"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import TitleInput from "../../titleInput"
import ImportantRadio from "../../importantRadio"
import BodyTextarea from "../../bodyTextarea"
import { todoType } from "../../../utils/getTodo"
import CloseSvg from "../../closeSvg"
import { inspection } from "../../../utils/exchange"
const AddTodoCard = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigate = useNavigate()
  const [progess, setProgess] = useRecoilState(progessTodo)
  const [state, setState] = useState<todo>({ ...todoType })
  return (
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
        <h2 className="my-3 text-2xl border-b-4 border-black w-[95%] flex-center pb-2">Add Todo</h2>
        <form
          className="flex flex-col size-[80%] *:my-5 *:text-xl"
          onSubmit={e => {
            e.preventDefault()
            if (inspection(state)) alert("모든 항목을 입력해주세요.")
            else {
              setProgess(todo => [state, ...todo])
              sessionStorage.setItem("default", JSON.stringify([state, ...progess]))
              setOpen(false)
              navigate("/")
            }
          }}
        >
          <div className="flex-center">
            <span>제목 :&nbsp;</span>
            <TitleInput setFn={setState} />
          </div>
          <div className="flex-center">
            <span>중요도 :</span>
            <ImportantRadio setFn={setState} />
          </div>
          <div className="size-full flex justify-center">
            <span> 내용 :&nbsp;</span>
            <BodyTextarea setFn={setState} />
          </div>
          <div className="size-full flex items-end justify-center">
            <input type="submit" value="등록하기" className="bg-blue-500 text-white w-max" />
          </div>
        </form>
        <CloseSvg setFn={setOpen} />
      </article>
    </motion.section>
  )
}
export default AddTodoCard
