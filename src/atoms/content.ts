import { atom } from "recoil"
import { v1 } from "uuid"
import { todoType } from "../utils/getTodo"

export const modify = atom({
  key: `modify${v1()}`,
  default: false
})
// progess항목에서 i아이콘을 누르면 보이는 팝업에서 todo수정상태를 결정하는 atom
export const modifyStash = atom<todo>({
  key: `modifyStash${v1()}`,
  default: todoType
})
//수정할 todo의 state를 저장하는 atom
