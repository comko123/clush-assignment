import { useState } from "react"
import "./App.css"
import Layout from "./components/layout"
import SideBar from "./components/sideBar"
function App() {
  const [state, setState] = useState("1")
  return (
    <Layout>
      <div className="flex-center border-b-2 border-slate-300 pb-3 my-[2%]">
        <nav className="flex w-[40%] justify-between *:text-xl ">
          <div>
            <div className="hover-orange" onClick={() => setState("1")}>
              progress
            </div>
            {state ? <SideBar /> : null}
          </div>

          <div>
            <div className="hover-orange" onClick={() => setState("")}>
              complete
            </div>
            {!state ? <SideBar /> : null}
          </div>
        </nav>
      </div>
      <main className="w-full min-h-[65vh] bg-red-300 ">123</main>
    </Layout>
  )
}

export default App
