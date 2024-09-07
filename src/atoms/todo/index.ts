import { atom } from "recoil"
import { v1 } from "uuid"
import { getTodo } from "../../utils/getTodo"

export const progessTodo = atom<todo[] | []>({
  key: `progessTodo${v1()}`,
  default: getTodo("default")
})

export const completeTodo = atom<todo[] | []>({
  key: `completeTodo${v1()}`,
  default: getTodo("complete")
})
