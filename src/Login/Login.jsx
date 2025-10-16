import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {

    const {signIn} = use(AuthContext);



    const handleLogin = (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
       
        signIn(email, password).then(result => {
            console.log(result);
            toast.success("Log in success")
        }).catch(err => {
            console.log(err);
            toast.error(err.message)
        })
    }

    return (
       <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Log In Now!</h1> 
        <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"
           name='email'
           className="input" 
           placeholder="Email" />
          <label className="label">Password</label>
          <input
          name='password'
           type="password" 
           className="input" 
           placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

          {/* Google */}
        </fieldset>
        </form>
        <p>Not have an any account ? <Link to={'/register'} className='text-blue-500 hover:text-blue-700'>Register</Link></p>
      </div>
    </div>
    );
};

export default Login;