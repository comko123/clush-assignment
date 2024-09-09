const BodyTextarea = ({
  setFn,
  value
}: {
  setFn: (value: React.SetStateAction<todo>) => void
  value?: string
}) => {
  return (
    <textarea
      defaultValue={value}
      minLength={3}
      required
      className=" w-full h-full outline-none resize-none bg-slate-100 -mb-2 p-2"
      onBlur={e => setFn((item: todo) => ({ ...item, body: e.target.value }))}
    />
  )
}
export default BodyTextarea

// resize-none outline-none bg-slate-100 w-[85%] h-[150%] rounded-xl p-2
