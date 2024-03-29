import './style.css'
export const Loader = (props : Props) => {
  
  return (
    <>
    {
      props.prop ? 
      <div className="Container_loader">
        <span className="loader"></span>
      </div>
      :
      <span className="loader"></span>

    }

    </>
  )
}
