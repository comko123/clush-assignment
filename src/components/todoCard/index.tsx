import { useState, lazy, Suspense } from "react"
import PublicSvgBuldle from "./publicSvgBuldle"
import ComponentLoading from "../loading/componentLoading"
const DetailCard = lazy(() => import("./detailCard"))
const ProgessSvgBundle = lazy(() => import("./progessSvgBundle"))
const TodoCard = (item: todo) => {
  const [state, setState] = useState({
    view: false,
    modify: false,
    item
  })
  return (
    <section className="flex flex-col">
      <article className="blue-bod-4 flex-row-cen  rounded-xl px-2">
        <div className="flex justify-between relative top-[15%]">
          <div className="w-[75%] eclips">{item.title}</div>
          <div className="flex flex-col">
            <Suspense fallback={<ComponentLoading />}>
              {item.state !== "complete" && <ProgessSvgBundle changeState={item} />}
            </Suspense>
            <PublicSvgBuldle setState={setState} item={item} />
          </div>
        </div>

        <div
          className={`${
            item.state === "complete" && "relative bottom-3 left-1"
          } text-xs my-2 md:text-base -z-10`}
        >
          <div>중요도 : {item.important}</div>
          <div>등록 날짜 : {item.startDate}</div>
          {item.state === "complete" && <div>완료 날짜 : {item.endDate}</div>}
        </div>
      </article>

      {state.view ? (
        <Suspense fallback={<ComponentLoading />}>
          <DetailCard state={state} setState={setState} />
        </Suspense>
      ) : null}
    </section>
  )
}
export default TodoCard
//todo항목 등록시 보이는 컴포넌트
