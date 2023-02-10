import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => { 
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState("")
    const {signIn} =useContext(AuthContext)
    const location =useLocation()
    const [loginUserEmail,setLoginUserEmail]=useState("");
    const [token] =useToken(loginUserEmail)
    const navigate =useNavigate() 
    const from = location.state?.from?.pathname || "/"


    if(token){
        navigate(from, {replace:true})
    }

    const handleLogin = data => {
        console.log(data)
        setLoginError("")
        signIn(data.email,data.password)
        .then(result=>{
            const user =result.user;
            setLoginUserEmail(data.email)
            console.log(user)
            
        })
        .catch(error=>{
            console.log(error)
            setLoginError(error.message)
        })
    };
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center '>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text"> Email </span> </label>
                        <input type="text"
                         {...register("email",{
                            required:"Email Address is required"
                        })}
                        className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p  className='text-error'> {errors.email?.message} </p> }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text"> Password  </span> </label>
                        <input type="password" {...register("password",{
                            required:"Password is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                             {errors.password && <p  className='text-error'> {errors.password?.message} </p> }
                        <label className="label"> <span className="label-text"> Forget Password?  </span> </label>
                    </div>


                    {/* <p>{data}</p> */}
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {
                            loginError && <p className='text-error'> {loginError} </p>
                        }
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup"> Create new Account  </Link> </p>
                <div class="divider">OR</div>
                    <button className='btn btn-outline w-full'> Continue with google </button>

            </div>
        </div>
    );
};

export default Login;