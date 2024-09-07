import ContentBox from "../../components/contentBox"
import OptionBox from "../../components/optionBox"

const Main = () => {
  return (
    <>
      <OptionBox />
      <main className="todo-content-box">
        <ContentBox stash="default" />
      </main>
    </>
  )
}

export default Main
