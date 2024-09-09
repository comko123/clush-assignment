import { atom } from "recoil"
import { v1 } from "uuid"
import { getTodo } from "../utils/getTodo"

export const progessTodo = atom<todo[] | []>({
  key: `progessTodo${v1()}`,
  default: getTodo("default")
})

export const completeTodo = atom<todo[] | []>({
  key: `completeTodo${v1()}`,
  default: getTodo("complete")
})

export const selectTodo = atom<todo>({
  key: `selectTodo${v1()}`,
  default: {
    title: "",
    body: "",
    important: "",
    startDate: "",
    endDate: "",
    state: "progess",
    id: ""
  }
})
