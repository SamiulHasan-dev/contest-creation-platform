import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'animate.css';
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const [disabled, setDisable] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        }
        else {
            setDisable(true);
        }
    }

    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            photo: data.photoURL,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    // reset();
                                    Swal.fire({
                                        title: "User Login Successfully",
                                        showClass: {
                                            popup: `
                                                animate__animated
                                                animate__fadeInUp
                                                animate__faster
                                            `
                                        },
                                        hideClass: {
                                            popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster
                                            `
                                        }
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-3">Sign Up now!</h1>
                        <img className="h-[400px] w-full" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNTAw8fDzDbpdMNrvA2LgSyfQ5F2mek9xCk9QZ-1oisDeTecRPaI3VKnZU8lDrxCqMC8&usqp=CAU'} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.name && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&_*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && (<p className="text-red-600">Password is required</p>)}
                                {errors.password?.type === "minLength" && (<p className="text-red-600">Password must be 6 characters</p>)}
                                {errors.password?.type === "maxLength" && (<p className="text-red-600">Password must be less than 20 characters</p>)}
                                {errors.password?.type === "pattern" && (<p className="text-red-600">Password must have one upper case, one lower case, one number and one special characters</p>)}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="type the captcha above" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled}
                                    className="btn bg-[#118acb] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="w-full px-7">
                            <button onClick={handleGoogleSignIn} className="btn bg-[#118acb] w-full text-white">Login with Google <FaGoogle /></button>
                        </div>
                        <p className='text-center mb-6'><small>Already Have an Account? <Link to="/login" className='text-sky-600 underline'>Please Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;