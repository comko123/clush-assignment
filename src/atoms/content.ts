import { atom } from "recoil"
import { v1 } from "uuid"
import { todoType } from "../utils/getTodo"

export const modify = atom({
  key: `modify${v1()}`,
  default: false
})

export const modifyStash = atom<todo>({
  key: `modifyStash${v1()}`,
  default: todoType
})
