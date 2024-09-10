const ImportantRadio = ({ setFn, value }: setterFn<todo>) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map(stash => (
        <div key={stash} className="flex-center mx-2">
          <input
            type="radio"
            name="important_modify"
            value={stash}
            defaultChecked={value === stash + ""}
            required
            onClick={() => setFn(scale => ({ ...scale, important: stash + "" }))}
          />
          <div className="mb-[2px] ml-1">{stash}</div>
        </div>
      ))}
    </>
  )
}
export default ImportantRadio
