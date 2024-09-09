import { v1 } from "uuid"
import { date } from "./date"

export const getTodo = (state: select) => {
  const scaleState = sessionStorage.getItem(state)
  if (scaleState) return JSON.parse(scaleState)
  else return []
}

export const todoType: todo = {
  title: "",
  body: "",
  important: "",
  startDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `,
  endDate: "",
  state: "progess",
  id: v1()
}
