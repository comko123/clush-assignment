const BodyTextarea = ({ setFn, value }: setterFn<todo>) => {
  return (
    <textarea
      defaultValue={value}
      minLength={3}
      required
      className={`${value ? "rounded-xl -mb-2 size-full" : "w-[85%] h-[150%]"} sla-100 p-2`}
      onBlur={e => setFn(item => ({ ...item, body: e.target.value }))}
    />
  )
}
export default BodyTextarea
