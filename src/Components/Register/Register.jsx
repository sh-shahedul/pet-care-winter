import React, { use, useState } from 'react';
import { Link, useNavigate} from 'react-router';
import toast from "react-hot-toast"
import { PiEyeBold } from 'react-icons/pi';
import { TbEyeClosed } from 'react-icons/tb';
import { AuthContext } from '../../Provider/AuthContex';
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
            updateProfileuser({ displayName: name,  photoURL: photo  })
            .then(()=>{
                 setuser({...result.user, displayName: name,  photoURL: photo  })
            })
            .catch((error)=>{
                console.log(error)
                setuser(result.user)
            })
            navigate('/')
           })
           .catch((error)=>{
            console.log(error.message)
            setError('An account with this email already exists. Try Login in or use a different email.')
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
            console.log(error)
           setError('somthing error! please try again later')
           })
    }
       


      const handelShow =()=>{
        setShow(!show)
      }
         

           



    return (
        <div className='flex justify-center min-h-screen items-center bg-orange-100'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">

            <form onSubmit={handelRegister}>
                <fieldset className="fieldset">
                    <h2 className='text-2xl font-semibold text-center py-6'>Register your account</h2>
                    <hr className='text-gray-200 pb-4' />
               {/* name  */}
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
            {/* photo  URL  */}
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
               {/* email  */}
          <label className="label">Email address</label>
          <input type="email" name='email' className="input" placeholder="Email" />
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
          

           {/* term  */}
          <label className="label">
           <input type="checkbox" name='term' className="checkbox " />
                Accpect our term and condition
             </label>
          {
            error &&  <h1 className='text-red-600 font-medium'>{error}</h1>
          }
          {
            success &&  <h1 className='text-green-600 font-medium'>{success}</h1>
          }
          <button type='submit' className="text-white mt-2 font-bold px-4 py-2 rounded-2xl bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 transition-all duration-300 focus:outline-none">Register</button>
               
                
                 

                 </fieldset>
            </form>
             <p className='divider'>OR</p>

            <button onClick={handelGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
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