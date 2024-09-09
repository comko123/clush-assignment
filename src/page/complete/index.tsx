import { useRecoilValue } from "recoil"
import { completeTodo } from "../../atoms/todo"
import ContentBox from "../../components/contentBox"

const Complete = () => {
  const complete = useRecoilValue(completeTodo)
  return (
    <>
      <main className={`${complete.length ? "todo-content-box" : "todo-empty-box"}`}>
        <ContentBox stash="complete" atom={completeTodo} />
      </main>
    </>
  )
}
export default Complete
