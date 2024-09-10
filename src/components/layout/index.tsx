import SideBar from "./sideBar"
import Footer from "../footer"
import { select } from "../../type/select"
import { useLocation, useNavigate } from "react-router-dom"
const Layout = ({ children }: { children: children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const movement = (link: select) => {
    if (link === "default") navigate("/")
    else navigate(link)
  }
  return (
    <div className=" flex-coll size-full mt-5 md:mt-0 mb-5 ">
      <header className="w-full  text-center my-6">
        <h1 className="text-4xl">ToDo List</h1>
      </header>

      <div className="flex-center border-b-2 border-slate-300 pb-3 screen-95pc">
        <nav className="flex w-[80%] md:w-[40%] justify-between *:text-2xl ">
          <div>
            <div className="hover-orange" onClick={() => movement("default")}>
              progress
            </div>
            {location.pathname !== "/complete" ? <SideBar /> : null}
          </div>

          <div>
            <div className="hover-orange" onClick={() => movement("complete")}>
              complete
            </div>
            {location.pathname === "/complete" ? <SideBar /> : null}
          </div>
        </nav>
      </div>

      <div className="screen-95pc h-[70vh]">{children}</div>
      <Footer />
    </div>
  )
}
export default Layout
//ui 재사용을 위한 컴포넌트 (생산성 up!)
