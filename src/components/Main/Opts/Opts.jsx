import React from 'react'
import './Opts.css'
export default function Opts() {
  return (
    <>
     <div className='container flex' style={{"justifyContent":"center"}}>
     <div className='container shad mt-3 opts ' style={{background:"white"}} >
      <form>
  <div className="form-group cont">

  <label for="exampleInputEmail1" className='opt mt-2' style={{marginLeft:"3rem"}}>Enter the 4 digit code we sent on your mobile!</label><br/>
  
  </div>
 
  <div className='cont'>
  <div className="form-group flex inp">
   <input type="text"  maxLength={1}  className="opt-field" name="opt" style={{width:"2rem"}}/>
   <input type="text"  maxLength={1}  className="opt-field" name="opt"/>
   <input type="text"  maxLength={1}  className="opt-field" name="opt"/>
   <input type="text"  maxLength={1}  className="opt-field" name="opt"/>
  </div>

  </div>
  <div className='cont'> <button type="submit" className="btn  btn-primary  mt-2 mb-1" style={{ "background-image": "linear-gradient(to bottom right, hsl(187,85%,43%), rgb(40, 46, 229) 100%)", marginLeft:"5rem", fontSize:"12px"}}>VERIFY</button></div>
 
</form>
    </div>
     </div>
    </>
  )
}
