import React from 'react';
import { Link } from 'react-router';
const LogIn = () => {
  


     

    


    return (
        <div className='flex justify-center min-h-screen items-center bg-orange-100'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">

            <form onSubmit={''}>
                <fieldset className="fieldset">
          <h2 className='text-2xl font-semibold text-center py-6'>Login your account</h2>
          {/* email  */}
          <label className="label">Email address</label>
          <input 
         
          type="email" 
          name='email' 
          className="input"
           placeholder="Email" />
          {/* password  */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a onClick={''} type='button' className="link link-hover">Forgot password?</a></div>
           {/* {
            error &&  <h1 className='text-red-600 font-medium'>{error}</h1>
          }
          {
            success &&  <h1 className='text-green-600 font-medium'>{success}</h1>
          } */}
          <button className="btn btn-neutral mt-4">Login</button>
              <p className='font-semibold text-center py-3'>Dont’t Have An Account ? <Link to='/register' className='text-secondary underline'>Register</Link></p>
                 </fieldset>
            </form>
      </div>
    </div>
        </div>
    );
};

export default LogIn;