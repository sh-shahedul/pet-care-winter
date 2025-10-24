import React, { use, useState } from 'react';
import { Link, useNavigate} from 'react-router';
import toast from "react-hot-toast"
import { PiEyeBold } from 'react-icons/pi';
import { TbEyeClosed } from 'react-icons/tb';
import { AuthContext } from '../../Provider/AuthContex';
import { FcGoogle } from 'react-icons/fc';
import { getFriendlyMessage } from '../errorMessage/errorMessage';
// import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser,googleUser,updateProfileuser,setuser}=use(AuthContext)
    const[error,setError]=useState('')
    const[show,setShow]=useState(false)
     const[success,setSuccess]=useState('')
    const navigate = useNavigate()
    
     const handelRegister=(e)=>{
           e.preventDefault()
           const form = e.target
           const name = form.name.value
           const photo = form.photo.value
           const email = form.email.value
           const password = form.password.value
           const term = form.term.checked
        //    console.log('clicked',name,photo,email,password);


         const patternLength = /^.{6,}$/;
         const patternLower = /[a-z]/;
         const patternUpper = /[A-Z]/;


          



          if(!patternLength.test(password)){
        setError("❌ Password must be at least 6 characters long.")
        return
        }
        if(!patternLower.test(password)){
          setError("⚠️ Password must contain at least  one lowercase letter.")
            return
        }
        if(!patternUpper.test(password)){
          setError("⚠️ Password must contain at least one uppercase letter.")
            return
        }
        setError('')
        if(!term){
            setError('Please accpect our term and conditon.')
            return
          }

         setSuccess('')

           createUser(email,password)
           .then((result)=>{
            console.log(result.user)
            setSuccess('Login Successful!')
            e.target.reset()
            toast.success("🎉 Login Successful!");
            updateProfileuser({ displayName : name ,  photoURL : photo  })
            .then(()=>{
                 setuser({...result.user , displayName : name ,  photoURL : photo  })
            })
            .catch((error)=>{
                console.log(error)
                const message = getFriendlyMessage(error.code)
                setError(message)
                // setuser(result.user)
            })
            navigate('/')
           })
           .catch((error)=>{
            console.log(error.message)
            const message = getFriendlyMessage(error.code)
            setError(message)
           })






          

           
     }
     
       const handelGoogleLogin=()=>{
         
           googleUser()
           .then((result)=>{

            
            console.log(result.user)
           
             toast.success("🎉 Login Successful!");
            navigate('/')
            
           })
           .catch(error=>{
             const message = getFriendlyMessage(error.code)
              setError(message)
           })
    }
       


      const handelShow =()=>{
        setShow(!show)
      }
         

           



    return (
        <div className='flex justify-center min-h-screen items-center bg-linear-to-br from-orange-50 via-red-100 to-orange-100 '>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">

            <form onSubmit={handelRegister}>
                <fieldset className="fieldset">
                    <h2 className='text-2xl font-semibold text-center py-6'>Register your account</h2>
                    <hr className='text-gray-200 pb-4' />
               {/* name  */}
          <label className="label text-gray-800 font-semibold">Name</label>
          <input 
          type="text" 
          name='name'
           className="input w-full border border-orange-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 px-4"
           placeholder="Your Name" />
            {/* photo  URL  */}
           <label className="label text-gray-800 font-semibold">PhotoURL</label>
          <input type="text"
           name='photo' 
           className="input w-full border border-orange-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 px-4"
            placeholder="Photo URL" />
               {/* email  */}
          <label className="label text-gray-800 font-semibold">Email</label>
          <input
           type="email"
            name='email'
            className="input w-full border border-orange-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 px-4" 
             placeholder="Email" />
          {/* password  */}
          <label className="label text-gray-800 font-semibold">Password</label>
          <div className='relative'>
            <input 
            type={show? 'text':'password'} 
            name='password' 
            className="input w-full border border-orange-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 px-4"
            placeholder="Password" />


            <p onClick={()=>handelShow(!show)} className='absolute top-3 right-8 cursor-pointer'>{show?<PiEyeBold size={18}/>:<TbEyeClosed size={18}/>}</p>
          </div>
          

           {/* term  */}
          

              <label className="label mt-2 flex items-center gap-2">
                                <input type="checkbox" name="term"   className="checkbox checked:border-orange-500 checked:bg-orange-400 checked:text-white"/>
                                <p className="text-gray-600 font-medium">I agree to the <span className="text-orange-500 font-bold">terms & conditions</span>.</p>
                            </label>
          {
            error &&  <h1 className='text-red-600 font-medium'>{error}</h1>
          }
          {
            success &&  <h1 className='text-green-600 font-medium'>{success}</h1>
          }
          <button type='submit' className="text-white mt-2 font-bold px-4 py-2 rounded-2xl bg-linear-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none">Register</button>
               
                
                 

                 </fieldset>
            </form>
             <p className='divider'>OR</p>

                <button onClick={handelGoogleLogin} className="btn w-full btn-outline border-orange-400 text-orange-500 hover:bg-orange-100 hover:border-border-500 flex items-center justify-center gap-2 transition">
                <FcGoogle size={18} />
                Login with Google
                </button>
              <p className='font-semibold text-center py-3'>All ready Have An Account ? <Link to='/login' className='text-secondary underline'>Login</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Register;









 // e.preventDefault()
        // const form = e.target
        // const name = form.name.value
        // const photo = form.photo.value
        // const email = form.email.value
        // const password = form.password.value
        // const term = form.term.checked
        // const patternLength = /^.{6,}$/;
        // const patternCase = /^(?=.*[a-z])(?=.*[A-Z])/;
        // const patternSpecial = /[!@#$%^&*(),.?":{}|<>]/;



        // setError('')
        //  if(!term){
        //     setError('Please accpect our term and conditon.')
        //     return


        // if(!patternLength.test(password)){
        // setError("❌ Password must be at least 6 characters long.")
        // return
        // }
        // if(!patternCase.test(password)){
        //   setError("⚠️ Password must contain at least one uppercase and one lowercase letter.")
        //     return
        // }
        // if(!patternSpecial.test(password)){
        //   setError("🔑 Password must contain at least one special character.")
        //     return
        // }