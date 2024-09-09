import { useSetRecoilState } from "recoil"
import { completeTodo, progessTodo } from "../../../atoms/todo"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { date } from "../../../utils/date"
const ProgessSvgBundle = ({
  changeState,
  setFn,
  setterFn,
  id
}: {
  changeState: todo
  setFn: React.Dispatch<React.SetStateAction<boolean>>
  setterFn: React.Dispatch<React.SetStateAction<boolean>>
  id: string
}) => {
  const setCompleteState = useSetRecoilState(completeTodo)
  const navigate = useNavigate()
  const setState = useSetRecoilState(progessTodo)
  return (
    <div>
      <motion.svg
        whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 text-green-500"
        onClick={() => {
          if (window.confirm("선택한 항목을 완료항목으로 이동합니다.")) {
            setState(stash => {
              const arr = stash.filter(scale => scale.id !== id)
              sessionStorage.setItem("default", JSON.stringify(arr))
              return arr
            })
            setCompleteState(stash => {
              const copy: todo = {
                ...changeState,
                endDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `,
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

      <motion.svg
        whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 text-purple-500"
        onClick={() => {
          setFn(true)
          setterFn(true)
        }}
      >
        <path
          fillRule="evenodd"
          d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
          clipRule="evenodd"
        />
      </motion.svg>
    </div>
  )
}

export default ProgessSvgBundle
