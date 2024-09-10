import { useEffect } from "react"

const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault()
  e.returnValue = ""
  // chrome에서는 설정이 필요해서 넣은 코드
}
const useReload = () => {
  useEffect(() => {
    void (() => window.addEventListener("beforeunload", preventClose))()
    return () => window.addEventListener("beforeunload", preventClose)
  }, [])
}
export default useReload

//새로고침을 막는 hook (todo입력 or todo수정시 사용)
