import { useRecoilValue } from "recoil"
import { progessTodo } from "../../atoms/todo"
import ContentBox from "../../components/contentBox"
import OptionBox from "../../components/optionBox"

const Main = () => {
  const progess = useRecoilValue(progessTodo)
  return (
    <>
      <OptionBox />
      <main className={`${progess.length ? "todo-content-box" : "todo-empty-box"}`}>
        <ContentBox stash="default" atom={progessTodo} />
      </main>
    </>
  )
}

export default Main
