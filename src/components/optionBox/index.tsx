const OptionBox = () => {
  return (
    <section className="w-full my-[1%] flex justify-end items-center">
      {["중요도순", "가나다순"].map(item => (
        <div key={item} className="mx-2 text-xl">
          <input type="radio" name="option" className="mr-1" />
          {item}
        </div>
      ))}

      <input type="text" placeholder="2자이상 입력하세요." className="bg-slate-100 ml-2" />
    </section>
  )
}
export default OptionBox
//radio css
