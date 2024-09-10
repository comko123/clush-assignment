import Loading from "../loading"
import { Suspense } from "react"

const importComponent = (Components: component) => {
  const LazyLoading = () => {
    return (
      <Suspense fallback={<Loading />}>
        <Components />
      </Suspense>
    )
  }
  return <LazyLoading />
}

export default importComponent
//suspense의 재사용을 극대화하는 컴포넌트
