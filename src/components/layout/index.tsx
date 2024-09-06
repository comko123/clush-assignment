import React from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center flex-col w-full h-full my-5 ">
      <header className="w-full  text-center">
        <h1 className="text-4xl ">ToDo List</h1>
      </header>
      <div className="w-[95%]">{children}</div>
      <footer>+</footer>
    </div>
  )
}
export default Layout
