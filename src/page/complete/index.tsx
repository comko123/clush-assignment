import { completeTodo } from "../../atoms/todo"
import ContentBox from "../../components/contentBox"
import OptionBox from "../../components/optionBox"
import { getTodo } from "../../utils/getTodo"

const Complete = () => {
  return (
    <>
      <OptionBox />
      <main className={`${getTodo("complete").length ? "todo-content-box" : "todo-empty-box"}`}>
        <ContentBox stash="complete" atom={completeTodo} />
      </main>
    </>
  )
}
export default Complete
