import { motion } from "framer-motion"
import { completeTodo, progessTodo } from "../../../atoms/todo"
import { useSetRecoilState } from "recoil"
import { filter } from "../../../utils/exchange"

const PublicSvgBuldle = ({
  state,
  id,
  setFn
}: {
  state: string
  id: string
  setFn: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const setState = useSetRecoilState(progessTodo)
  const setCompleteState = useSetRecoilState(completeTodo)
  return (
    <div>
      <motion.svg
        whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 text-red-500"
        onClick={() => {
          if (window.confirm("삭제 하시겠습니까?")) {
            if (state === "progess") {
              setState(stash => filter(stash, id, "progess"))
            } else {
              setCompleteState(stash => filter(stash, id, "complete"))
            }
          }
        }}
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
          clipRule="evenodd"
        />
      </motion.svg>

      <motion.svg
        whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-8 text-amber-500"
        onClick={() => setFn(true)}
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          clipRule="evenodd"
        />
      </motion.svg>
    </div>
  )
}

export default PublicSvgBuldle
