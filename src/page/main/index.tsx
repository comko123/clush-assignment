import { useRecoilValue } from "recoil"
import { progessTodo } from "../../atoms/todo"
import ContentBox from "../../components/contentBox"

const Main = () => {
  const progess = useRecoilValue(progessTodo)
  return (
    <>
      <main className={`${progess.length ? "todo-content-box" : "todo-empty-box"}`}>
        <ContentBox stash="default" atom={progessTodo} />
      </main>
    </>
  )
}

export default Main
