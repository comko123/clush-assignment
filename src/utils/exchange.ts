export const filter = (stash: todo[], id: string, word: todo["state"]) => {
  const arr = stash.filter(scale => scale.id !== id)
  sessionStorage.setItem(word === "complete" ? word : "default", JSON.stringify(arr))
  return arr
}

export const change = (stash: todo[], id: string, exchange: todo) => {
  const index = stash.findIndex(each => id === each.id)
  const copy = [...stash]
  copy.splice(index, 1)
  copy.splice(index, 0, exchange)
  sessionStorage.setItem("default", JSON.stringify(copy))
  return copy
}

export const inspection = (state: todo) => {
  return !state.important || !state.title || !state.body
}
