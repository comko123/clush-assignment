import { useState, lazy, Suspense } from "react"
import ComponentLoading from "../loading/componentLoading"

const AddTodoCard = lazy(() => import("./addTodoCard"))

const Footer = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open ? (
        <Suspense fallback={<ComponentLoading />}>
          <AddTodoCard setOpen={setOpen} />
        </Suspense>
      ) : (
        <footer
          className="sla-100 screen-95pc  text-center btn-hov mt-3 py-1 rounded-xl"
          onClick={() => setOpen(true)}
        >
          <input type="button" id="add Todo" value="Add Todo" className="hidden" />
          <label htmlFor="add Todo" className="flex-center w-full h-[7vh]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-xl mx-2">Add Todo</span>
          </label>
        </footer>
      )}
    </>
  )
}

export default Footer
