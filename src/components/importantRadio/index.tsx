const ImportantRadio = ({ setFn, value }: setterFn) => {
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
            onClick={() =>
              setFn(scale => ({ ...scale, item: { ...scale.item, important: stash + "" } }))
            }
          />
          <div className="mb-[2px] ml-1 text-base">{stash}</div>
        </div>
      ))}
    </>
  )
}
export default ImportantRadio
//todo를 작성하거나 수정할때 중요도를 체크하는 radio
