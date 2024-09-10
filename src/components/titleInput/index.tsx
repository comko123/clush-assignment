const TitleInput = ({ setFn, value }: setterFn<todo>) => {
  return (
    <input
      type="text"
      className="w-[85%] sla-100"
      minLength={3}
      required
      defaultValue={value}
      onBlur={e => setFn(scale => ({ ...scale, title: e.target.value }))}
    />
  )
}
export default TitleInput
