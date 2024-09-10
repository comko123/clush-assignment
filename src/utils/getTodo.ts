import { v1 } from "uuid"
import { localDate } from "./date"
import { select } from "../type/select"

export const getTodo = (state: select) => {
  const scaleState = sessionStorage.getItem(state)
  if (scaleState) return JSON.parse(scaleState)
  else return []
}
//세션 스토리지에서 선택한 항목의 todo배열을 가져와 return하는 getTodo함수
//*세션 스토리지 사용한 이유 해당과제에서는 서버와 db가 없기 때문에 최소한의 ux를 고려하여 세션 스토리지 사용

export const todoType: todo = {
  title: "",
  body: "",
  important: "",
  startDate: localDate,
  endDate: "",
  state: "progess",
  id: v1()
}

//todo의 초기형태인 todoType
