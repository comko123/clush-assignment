export const getTodo = (state: select) => {
  const scaleState = sessionStorage.getItem(state)
  if (scaleState) return JSON.parse(scaleState)
  else return []
}
