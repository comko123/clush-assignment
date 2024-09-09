import { v1 } from "uuid"
import TodoCard from "../todoCard"
import { RecoilState, useRecoilValue } from "recoil"

const ContentBox = ({ stash, atom }: { stash: select; atom: RecoilState<[] | todo[]> }) => {
  const state = useRecoilValue(atom)
  return (
    <>
      {!state.length ? (
        <article className="flex-center w-full h-[58vh] text-4xl ">
          {`"${stash === "default" ? "등록된" : "완료한"} 일정이 없습니다."`}
        </article>
      ) : (
        state.map(item => <TodoCard {...item} key={v1()} />)
      )}
    </>
  )
}
export default ContentBox
