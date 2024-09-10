import App from "./App"
import { lazy } from "react"
import Main from "./page/main"
const Nothing = lazy(() => import("./page/nothing"))
const Error = lazy(() => import("./components/error"))
const Complete = lazy(() => import("./page/complete"))
import { createBrowserRouter } from "react-router-dom"
import importComponent from "./components/important"
export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: importComponent(Nothing),
    children: [
      { path: "/", element: <Main />, errorElement: importComponent(Error) },
      {
        path: "/complete",
        element: importComponent(Complete),
        errorElement: importComponent(Error)
      }
    ]
  }
])
