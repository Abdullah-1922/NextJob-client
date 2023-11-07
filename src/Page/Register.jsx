import { updateProfile } from "firebase/auth";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Routes/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiShow } from "react-icons/bi";

const Register = () => {
    
const {createUser ,googleLog}=useContext(AuthContext)
console.log(createUser);

const location = useLocation();
const navigate =useNavigate()

    const [showPass,setShowPass]=useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const img =e.target.img.value;
        const terms =e.target.terms.checked
        
        if(!/^(?=.*[A-Z])(?=.*[*&%$#]).{6,}$/.test(password)){
            enqueueSnackbar('Invalid password. Requirements: 1 Capital, 1 Special (*&%$#), Min 6 characters!', { variant: 'error' }) 
            return 
        }
        console.log(terms);
        if(!terms){
            console.log('accept terms');
            toast.warn('Accept terms and condition' , {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return
        }
    
        console.log(email, name, password);
    
       createUser( email, password)
          .then((res) => {
            console.log(res);
            toast.success('Account Created Successfully', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            updateProfile(res.user, {
              displayName: name,
              photoURL:img,
            })
              .then((res) => console.log(res))
              .catch((error) => console.log(error));
    
    
          })
          .catch((error) =>{
            const err = error.message
            console.log(err);
            toast.error(`${err}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          });
      };
      const handleGoogleLogin=()=>{
        googleLog().then(res=> {
          console.log(res);
          navigate(location?.state ? location?.state : '/')
        })      }
    return (
        <div>
             <div className="my-10">
         

         <div className=' dark:border flex justify-center w-fit mx-auto py-10 px-3 md:p-10 rounded-3xl bg-gradient-to-r  from-green-200 via-cyan-200 to-blue-300   dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 '>
   <div className='relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none'>
     <h4 className='block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased dark:text-white'>
       Registration
     </h4>
     <p className='mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased  dark:text-white'>
       Enter your details to register.
     </p>
     <ToastContainer />
     <SnackbarProvider />
     <form
       onSubmit={handleSubmit}
       className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
       <div className='mb-4 flex flex-col gap-6'>
         <div className='relative h-11 w-full min-w-[200px]'>
           <input
           required
             name='name'
             className='peer h-full w-full rounded-md border  dark:text-white border-black border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
           />
           <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500  dark:text-white">
             Name
           </label>
         </div>
         <div className='relative h-11 w-full min-w-[200px]'>
           <input
           required
             name='img'
             className='peer h-full w-full  dark:text-white rounded-md border border-black border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
           />
           <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500  dark:text-white">
             Photo Url
           </label>
         </div>
         <div className='relative h-11 w-full min-w-[200px]'>
           <input
           required
             name='email'
             className='peer border-black  dark:text-white  h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
           />
           <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500  dark:text-white">
             Email
           </label>
         </div>

         <div className='relative h-11 w-full min-w-[200px]'>
           <input
             required
             name='password'
             type={ showPass ? 'text' : 'password'}
             className='peer  dark:text-white h-full border-black  w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
           />
           <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500  dark:text-white">
             Password
           </label>
           <div onClick={()=>setShowPass(!showPass)} className='absolute bottom-2 right-3'><BiShow className='text-3xl'></BiShow> </div>
         </div>
       </div>
       <div className='inline-flex items-center'>
         <label
           className='relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3'
           htmlFor='checkbox'
           data-ripple-dark='true'>
           <input
             name='terms'
             type='checkbox'
             className="before:content['']  dark:border-white border-black peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
             id='checkbox'
           />
           <span className='pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4  opacity-0 transition-opacity peer-checked:opacity-100'>
             <svg
               xmlns='http://www.w3.org/2000/svg'
               className='h-3.5 w-3.5 '
               viewBox='0 0 20 20'
               fill='currentColor'
               stroke='currentColor'>
               <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'></path>
             </svg>
           </span>
         </label>
         <label
           className='mt-px cursor-pointer select-none font-light text-gray-700'
           htmlFor='checkbox'>
           <p className='flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased  dark:text-white'>
             I agree the
             <a
               className='font-medium transition-colors hover:text-pink-500'
               href='#'>
               &nbsp;Terms and Conditions
             </a>
           </p>
         </label>
       </div>

       <button
         className='mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
         type='submit'
         data-ripple-light='true'>
         Register
       </button>
       <button
       onClick={handleGoogleLogin}
           className='flex mx-auto mt-5 select-none items-center gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none  dark:text-white disabled:opacity-50 disabled:shadow-none'
           type='button'
           data-ripple-dark='true'>
          <FcGoogle className='w-6 h-6'></FcGoogle>
           Continue with Google
         </button>
       <p className='mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased  dark:text-white'>
         Already have an account?
         <Link to={'/login'}  className='font-medium text-pink-500 transition-colors hover:text-blue-700'>login</Link>
       </p>
     </form>
   </div>
 </div>
     </div>
        </div>
    );
};

export default Register;