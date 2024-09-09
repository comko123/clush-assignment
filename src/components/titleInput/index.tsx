const TitleInput = ({
  setFn,
  value
}: {
  setFn: (value: React.SetStateAction<todo>) => void
  value?: string
}) => {
  return (
    <input
      type="text"
      className="w-[85%] bg-slate-100"
      minLength={3}
      required
      defaultValue={value}
      onBlur={e => setFn(scale => ({ ...scale, title: e.target.value }))}
    />
  )
}
export default TitleInput
