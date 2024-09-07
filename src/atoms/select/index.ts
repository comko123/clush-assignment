import { atom } from "recoil"
import { v1 } from "uuid"

export const selectState = atom<selectLink>({
  key: v1(),
  default: "default"
})
