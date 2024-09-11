export const filter = (stash: todo[], id: string, word: todo["state"]) => {
  const arr = stash.filter(scale => scale.id !== id)
  sessionStorage.setItem(word === "complete" ? word : "default", JSON.stringify(arr))
  return arr
}
//x아이콘을 눌렀을때 클릭한 todo항목을 삭제하는 filter함수
export const change = (stash: todo[], id: string, exchange: todo) => {
  const index = stash.findIndex(each => id === each.id)
  const copy = [...stash]
  copy.splice(index, 1)
  copy.splice(index, 0, { ...exchange, id: `${exchange.title} ${exchange.id}` })
  sessionStorage.setItem("default", JSON.stringify(copy))
  return copy
}
//todo를 수정할때 수정한 todo를 원래있던todo항목(수정전 todo항목)과 교체해주는 change함수
export const inspection = (state: todo) => {
  const splaceSpace = (word: string) => word.replaceAll(" ", "")
  return (
    !state.important ||
    !state.title ||
    !state.body ||
    !splaceSpace(state.title) ||
    !splaceSpace(state.body)
  )
}
// todo를 수정하거나 작성할때 모든 항목을 작성하거나 체코했는지 검사하는 inspection함수
