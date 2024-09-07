import { progessTodo } from "../../atoms/todo"
import ContentBox from "../../components/contentBox"
import OptionBox from "../../components/optionBox"
import { getTodo } from "../../utils/getTodo"

const Main = () => {
  return (
    <>
      <OptionBox />
      <main className={`${getTodo("default").length ? "todo-content-box" : "todo-empty-box"}`}>
        <ContentBox stash="default" atom={progessTodo} />
      </main>
    </>
  )
}

export default Main
