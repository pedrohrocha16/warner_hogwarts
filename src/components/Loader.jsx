import './Loader.css'

const Loader = () => {
  return (
      <div className='div_loader'>
         <button type="button" disabled className='loader'>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
         </button>
      </div>
  )
}

export default Loader