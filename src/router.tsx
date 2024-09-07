import App from "./App"
import Complete from "./page/complete"
import Main from "./page/main"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/complete", element: <Complete /> }
    ]
  }
])
//error page and loading page
