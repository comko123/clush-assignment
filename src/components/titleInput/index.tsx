const TitleInput = ({ setFn, value }: setterFn) => {
  return (
    <input
      type="text"
      className="w-[65%] md:w-[85%] sla-100"
      minLength={3}
      required
      defaultValue={value}
      onBlur={e => setFn(scale => ({ ...scale, item: { ...scale.item, title: e.target.value } }))}
    />
  )
}
export default TitleInput
//todo를 작성하거나 수정할떄 제목을 입력하는 컴포넌트
