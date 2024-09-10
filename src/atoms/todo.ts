import { v1 } from "uuid"
import { atom } from "recoil"
import { getTodo } from "../utils/getTodo"

export const progessTodo = atom<todo[] | []>({
  key: `progessTodo${v1()}`,
  default: getTodo("default")
})

//progess항목을 저장하는 atom

export const completeTodo = atom<todo[] | []>({
  key: `completeTodo${v1()}`,
  default: getTodo("complete")
})
//complete항목을 저장하는 atom
