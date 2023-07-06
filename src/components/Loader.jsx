import './Loader.css'

const Loader = () => {
  return (
      <div className='div_loader'>
         <button type="button" disabled className='loader' style={{fontSize:"18px", fontWeight:"500"}}>
            <span style={{marginRight:"10px", color:"#2196f3"}} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
         </button>
      </div>
  )
}

export default Loader