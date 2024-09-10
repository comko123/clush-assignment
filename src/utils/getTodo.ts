import { v1 } from "uuid"
import { localDate } from "./date"
import { select } from "../type/select"

export const getTodo = (state: select) => {
  const scaleState = sessionStorage.getItem(state)
  if (scaleState) return JSON.parse(scaleState)
  else return []
}

export const todoType: todo = {
  title: "",
  body: "",
  important: "",
  startDate: localDate,
  endDate: "",
  state: "progess",
  id: v1()
}
