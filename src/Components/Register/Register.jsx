import React from 'react';
import { Link} from 'react-router';

import { PiEyeBold } from 'react-icons/pi';
import { TbEyeClosed } from 'react-icons/tb';
// import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    // const[error,setError]=useState('')
    // const[show,setShow]=useState(false)
    // const[success,setSuccess]=useState('')
    // const navigate = useNavigate()
    
     const handelRegister=(e)=>{
           e.preventDefault()
           const form = e.target
           const name = form.name.value
           const photo = form.photo.value
           const email = form.email.value
           const password = form.password.value
           console.log('clicked',name,photo,email,password)
           
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
            type='password' 
            name='password' 
            className="input" 
            placeholder="Password" />


            <p onClick={''} className='absolute top-3 right-8'>eye</p>
          </div>
          

           {/* term  */}
          <label className="label">
           <input type="checkbox" name='term' className="checkbox" />
                Accpect our term and condition
             </label>
          {/* {
            error &&  <h1 className='text-red-600 font-medium'>{error}</h1>
          }
          {
            success &&  <h1 className='text-green-600 font-medium'>{success}</h1>
          } */}
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
              <p className='font-semibold text-center py-3'>All ready Have An Account ? <Link to='/login' className='text-secondary underline'>Login</Link></p>
                 </fieldset>
            </form>
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