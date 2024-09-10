const BodyTextarea = ({ setFn, value }: setterFn<todo>) => {
  return (
    <textarea
      defaultValue={value}
      minLength={3}
      required
      className={`${value ? "-mb-2 size-full" : "w-[85%] h-[150%]"} sla-100 p-2 rounded-xl`}
      onBlur={e => setFn(item => ({ ...item, body: e.target.value }))}
    />
  )
}
export default BodyTextarea
// 수정하거나 작성시 내용을 작성하는 textarea
