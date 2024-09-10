import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <section className="imp-page-size imp-page-pad">
      <div className="imp-text"> Error!</div>
      <input type="button" value="reload" onClick={() => navigate(0)} className="imp-page-btn" />
    </section>
  )
}

export default Error
