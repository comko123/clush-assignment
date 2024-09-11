import { motion } from "framer-motion"
import { useRecoilState } from "recoil"
import { progessTodo } from "../../../atoms/todo"
import { useNavigate } from "react-router-dom"
import TitleInput from "../../titleInput"
import ImportantRadio from "../../importantRadio"
import BodyTextarea from "../../bodyTextarea"
import CloseSvg from "../../closeSvg"
import { inspection } from "../../../utils/exchange"
import useReload from "../../../hooks/useReload"
const AddTodoCard = ({ state, setState }: addTodo) => {
  const navigate = useNavigate()
  const [progess, setProgess] = useRecoilState(progessTodo)
  useReload()
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <article
        className="bg-black bg-opacity-60 abs-tl-0 full-brow"
        onClick={() => setState(state => ({ ...state, view: false }))}
      />
      <article className=" flex-coll abs-tl-25 half-brow bg-white z-10 rounded-xl">
        <h2 className="my-3 text-2xl black-bod-4 w-[95%] flex-center pb-2">Add Todo</h2>
        <form
          className="flex flex-col size-[80%] *:my-5 *:text-xl"
          onSubmit={e => {
            e.preventDefault()
            if (inspection(state.item)) alert("모든 항목을 입력해주세요.")
            else {
              setProgess(todo => [
                {
                  ...state.item,
                  id: `${state.item.title} ${state.item.id} ${(Math.random(), Math.random() * 2)} `
                },
                ...todo
              ])
              sessionStorage.setItem("default", JSON.stringify([state.item, ...progess]))
              setState(state => ({ ...state, view: false }))
              navigate("/")
            }
          }}
        >
          <div className="flex-center">
            <span className="text-pos">제목 :&nbsp;</span>
            <TitleInput setFn={setState} />
          </div>
          <div className="flex-center">
            <span className="text-pos">중요도 :&nbsp;</span>
            <ImportantRadio setFn={setState} />
          </div>
          <div className="size-full flex justify-center">
            <span className="text-pos"> 내용 :&nbsp;</span>
            <BodyTextarea setFn={setState} />
          </div>
          <div className="size-full flex-ce">
            <input
              type="submit"
              value="등록하기"
              className="bg-blue-500 text-white w-max cursor-pointer"
            />
          </div>
        </form>
        <CloseSvg setFn={setState} />
      </article>
    </motion.section>
  )
}
export default AddTodoCard
//새로운 todo항목을 작성하는 컴포넌트
