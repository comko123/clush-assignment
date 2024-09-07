const OptionBox = () => {
  return (
    <section className="w-full my-[1%] flex justify-end items-center">
      {["이름순", "중요도순", "최신등록순"].map(item => (
        <div key={item} className="mx-2">
          <input type="radio" name="option" />
          {item}
        </div>
      ))}

      <input type="text" placeholder="2자이상 입력하세요." className="bg-slate-100 ml-2" />
    </section>
  )
}
export default OptionBox
