import { useSetRecoilState } from "recoil"
import { completeTodo, progessTodo } from "../../../atoms/todo"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { localDate } from "../../../utils/date"
import { filter } from "../../../utils/exchange"
const ProgessSvgBundle = ({ changeState }: progessSvg) => {
  const setCompleteState = useSetRecoilState(completeTodo)
  const setState = useSetRecoilState(progessTodo)
  const navigate = useNavigate()
  return (
    <div>
      <motion.svg
        whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className=" text-green-500"
        onClick={() => {
          if (window.confirm("선택한 항목을 완료항목으로 이동합니다.")) {
            setState(stash => filter(stash, changeState.id, "progess"))
            setCompleteState(stash => {
              const copy: todo = {
                ...changeState,
                endDate: localDate,
                state: "complete"
              }
              const arr = [copy, ...stash]
              sessionStorage.setItem("complete", JSON.stringify([...arr]))
              return arr
            })
            navigate("/complete")
          }
        }}
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </motion.svg>
    </div>
  )
}

export default ProgessSvgBundle
//progess항목에서만 보이는 v아이콘(완료항목으로 이동)
