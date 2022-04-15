import React from 'react'
import { signInWithGoogle,auth,logout} from "../Firebase"
function SignIn() {
  const logoutfn =()=>{
    //localStorage.clear()
    logout()

  }

  return (

    <div>
      {
        !localStorage.getItem("email") ?(
          <>
          <button   className="btn" onClick={()=>signInWithGoogle()}>Sign in</button>
          
          </>

        ):
        (
          <>
          <button onClick={logoutfn}>Sign out</button>
          
          </>
        )


      }
        
        
     <p>{localStorage.getItem("email")}</p>
    </div>
  )
}

export default SignIn