import ContentBox from "../../components/contentBox"
import OptionBox from "../../components/optionBox"

const Complete = () => {
  return (
    <>
      <OptionBox />
      <main className="todo-content-box">
        <ContentBox stash="complete" />
      </main>
    </>
  )
}
export default Complete
