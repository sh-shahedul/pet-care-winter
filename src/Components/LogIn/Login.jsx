import React, { use,  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContex';
import { PiEyeBold } from 'react-icons/pi';
import { TbEyeClosed } from 'react-icons/tb';
import toast from "react-hot-toast"
// import toast, { Toaster } from 'react-hot-toast';
const LogIn = () => {
   const[success,setSuccess]=useState('')
   const[error,setError]=useState('')
   const [email, setEmail] = useState("");
    const navigate = useNavigate()
   const[show,setShow]=useState(false)
    // const emailRef = useRef()
  const {signinUser,googleUser} =use(AuthContext)
   const location = useLocation()
   console.log(location)
  //  const navigate = useNavigate()
     
  const handelGoogleLogin=()=>{
         
           googleUser()
           .then((result)=>{
            console.log(result.user)
             toast.success("🎉 Login Successful!");
             navigate(location.state|| '/')
            //  navigate('/')
            
           })
           .catch(error=>{
            console.log(error)
            setError('Something error!')
           })
    }




   const handelLogin=(e)=>{
     e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
          setError('')
          setSuccess('')
        signinUser(email,password)
          .then(result=>{
            console.log(result.user)
             e.target.reset()
             toast.success("🎉 Login Successful!");
             navigate(location.state|| '/')
            // navigate('/')
            setSuccess('login Successful')
           
         })
         .catch( error=>{
            console.log(error.message)
            setError('Invalid email or password. Please try again.')
            return
         })



   }

    

    
  const handelShow =()=>{
        setShow(!show)
      }

    //   const handelForgotPassword=()=>{
    //      const email = emailRef.current.value
    //      forgotUser(email)
    //      .then(()=>{
    //        alert('please check your email')
    //      })
    //      .catch(error=>{
    //       setError(error.message)
    //      })
    // }

    return (
        <div className='flex justify-center min-h-screen items-center bg-orange-100'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">

            <form onSubmit={handelLogin}>
                <fieldset className="fieldset">
          <h2 className='text-2xl font-semibold text-center py-6'>Login your account</h2>
          {/* email  */}
          <label className="label">Email address</label>
          <input 
          // ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          name='email' 
          className="input"
           placeholder="Email" />
          {/* password  */}
          <label className="label">Password</label>
                   <div className='relative'>
                     <input 
                     type={show? 'text':'password'} 
                     name='password' 
                     className="input" 
                     placeholder="Password" />
         
         
                     <p onClick={()=>handelShow(!show)} className='absolute top-3 right-8 cursor-pointer'>{show?<PiEyeBold size={18}/>:<TbEyeClosed size={18}/>}</p>
                   </div>
          <div><Link to='/forgotpass'  state={{ email: email }} type='button' className="link link-hover">Forgot password?</Link></div>
           {
            error &&  <h1 className='text-red-600 font-medium'>{error}</h1>
          }
          {
            success &&  <h1 className='text-green-600 font-medium'>{success}</h1>
          }
          <button className="text-white mt-2 font-bold px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none">Login</button>
          
                 </fieldset>
            </form>
             <p className='divider'>OR</p>

                <button onClick={handelGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
                </button>
              <p className='font-semibold text-center py-3'>Dont’t Have An Account ? <Link to='/register' className='text-secondary underline'>Register</Link></p>
      </div>
    </div>

   
        </div>
    );
};

export default LogIn;