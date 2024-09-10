import { useNavigate } from "react-router-dom"

const Nothing = () => {
  const navigate = useNavigate()
  return (
    <section className="imp-page-size imp-page-pad">
      <div className="imp-text"> 404 NotPage</div>
      <input type="button" value="Main" onClick={() => navigate("/")} className="imp-page-btn" />
    </section>
  )
}
export default Nothing
//사용자가 존재하지 않는 url에 접근할때 보여주는 페이지
