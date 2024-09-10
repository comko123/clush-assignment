import { useState, lazy, Suspense, useEffect } from "react"
import PublicSvgBuldle from "./publicSvgBuldle"
import { useRecoilState, useSetRecoilState } from "recoil"
import { modify, modifyStash } from "../../atoms/content"
import ComponentLoading from "../loading/componentLoading"
const DetailCard = lazy(() => import("./detailCard"))
const ProgessSvgBundle = lazy(() => import("./progessSvgBundle"))
const TodoCard = (item: todo) => {
  const [view, setView] = useState(false)
  const setModify = useSetRecoilState(modify)
  const [modifyState, setModifyState] = useRecoilState(modifyStash)

  useEffect(() => {
    setModifyState(item)
  }, [item, setModifyState])

  return (
    <section className="flex flex-col">
      <article className="blue-bod-4 flex-row-cen  rounded-xl px-2">
        <div className="flex justify-between relative top-[15%]">
          <div className="w-[75%] eclips">{item.title}</div>
          <div className="flex">
            <Suspense fallback={<ComponentLoading />}>
              {item.state !== "complete" && (
                <ProgessSvgBundle
                  changeState={modifyState}
                  id={item.id}
                  setterFn={setModify}
                  setFn={setView}
                />
              )}
            </Suspense>
            <PublicSvgBuldle id={item.id} setFn={setView} state={item.state} />
          </div>
        </div>

        <div
          className={`${
            item.state === "complete" && "relative bottom-3 left-1"
          } text-xs my-2 md:text-base`}
        >
          <div>중요도 : {item.important}</div>
          <div>등록 날짜 : {item.startDate}</div>
          {item.state === "complete" && <div>완료 날짜 : {item.endDate}</div>}
        </div>
      </article>

      {view ? (
        <Suspense fallback={<ComponentLoading />}>
          <DetailCard setView={setView} />
        </Suspense>
      ) : null}
    </section>
  )
}
export default TodoCard
