import { v1 } from "uuid"
import { useRecoilValue } from "recoil"
import { lazy, Suspense } from "react"
import ComponentLoading from "../loading/componentLoading"
import { selectTodo } from "../../type/select"
const TodoCard = lazy(() => import("../todoCard"))
const ContentBox = ({ stash, atom }: selectTodo) => {
  const state = useRecoilValue(atom)
  return (
    <>
      {!state.length ? (
        <article className="flex-center w-full h-[60vh] text-2xl md:text-4xl ">
          {`"${stash === "default" ? "등록된" : "완료한"} 일정이 없습니다."`}
        </article>
      ) : (
        <Suspense fallback={<ComponentLoading />}>
          {state.map(item => (
            <TodoCard {...item} key={v1()} />
          ))}
        </Suspense>
      )}
    </>
  )
}
export default ContentBox
//todo 항목을 보여주는 box
