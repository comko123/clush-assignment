import { useState } from "react"

const ContentBox = ({ stash }: { stash: select }) => {
  const [state] = useState<number[]>(JSON.parse(sessionStorage.getItem(stash) as string))
  return (
    <>
      {!state ? (
        <article className="flex-center w-full h-[58vh] text-4xl ">
          {`"${stash === "default" ? "등록된" : "완료한"} 일정이 없습니다."`}
        </article>
      ) : (
        state.map((item: number) => <article key={item}>{item}</article>)
      )}
    </>
  )
}
export default ContentBox
