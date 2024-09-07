import React from "react"
import { useRecoilState } from "recoil"
import SideBar from "../../components/sideBar"
import { selectState } from "../../atoms/select"
import { useNavigate } from "react-router-dom"
import Footer from "../footer"
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useRecoilState(selectState)
  const navigate = useNavigate()

  const movement = (link: select) => {
    setState(link)
    if (link === "default") navigate("/")
    else navigate(link)
  }

  return (
    <div className="flex-center flex-col w-full h-full my-5 ">
      <header className="w-full  text-center my-6">
        <h1 className="text-4xl ">ToDo List</h1>
      </header>

      <div className="flex-center border-b-2 border-slate-300 pb-3 screen-95pc">
        <nav className="flex w-[40%] justify-between *:text-2xl ">
          <div>
            <div className="hover-orange" onClick={() => movement("default")}>
              progress
            </div>
            {state !== "complete" ? <SideBar /> : null}
          </div>

          <div>
            <div className="hover-orange" onClick={() => movement("complete")}>
              complete
            </div>
            {state === "complete" ? <SideBar /> : null}
          </div>
        </nav>
      </div>

      <div className="screen-95pc">{children}</div>
      <Footer />
    </div>
  )
}
export default Layout
