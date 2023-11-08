import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateJob = () => {
    const data =useLoaderData()
    const navigate =useNavigate()
    const {email,jobDescription,deadLine,jobTitle,category,minimumPrice,maximumPrice}=data ||{}
    console.log(data);
    const handleUpdateJob=(e)=>{
        e.preventDefault()
        const form =e.target || 'not given'
        const email = data.email || 'not given'
        const jobTitle = form.jobTitle.value || 'not given'
        const jobDescription = form.jobDescription.value || 'not given'
        const category = form.category.value || 'not given'
        const minimumPrice = form.minimumPrice.value || 'not given'
        const maximumPrice = form.maximumPrice.value || 'not given'
        const deadLine = form.deadLine.value || 'not given'
          const UpdateJobData = {email,jobDescription,deadLine,jobTitle,category,minimumPrice,maximumPrice}
          console.log(UpdateJobData);
          axios.put(`https://assignment-11-server-roan.vercel.app/updatejob/${data._id}`,UpdateJobData)
          .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount==1){
                Swal.fire({
                    title: 'JOB UPDATED!',
                    text: 'Your Job post has been Updated!',
                    icon: 'success',
                  });
              navigate('/mypostedjobs')
            }
          })
    }
    return (
        <div>
          <Helmet>
                <title>
                  NextJob || UPDATE JOB
                </title>
              </Helmet>
             <div className=" max-w-[90%] mx-auto my-10" >
        <h3 className="text-3xl md:text-4xl lg:text-5xl  dark:text-white font-bold border-b-2 border-black max-w-fit mx-auto">Update YOUR JOB</h3>
      <form onSubmit={handleUpdateJob} className='border-gray-500 dark:border-white border  p-5 mb-20 my-10'>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Email address
          </label>
          <input
           
            readOnly
            defaultValue={email} 
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='john.doe@company.com'
            
          />
        </div>
        <div className='mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Job Title
          </label>
          <input
          defaultValue={jobTitle}
            type='text'
            id='job-title'
            name="jobTitle"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Your job title'
            required
          />
        </div>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <textarea
            defaultValue={jobDescription}
              placeholder='Job Description'
              name="jobDescription"
              className='textarea dark:text-white  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 textarea-bordered textarea-lg w-full max-w-xs'></textarea>
          </div>

          <div>
            <p className=' border-b dark:text-white border-black max-w-fit'>
              Choose your category
            </p>
            <select
            defaultValue={category}
              className='text-lg px-3 rounded-3xl py-2 bg-emerald-200 font-semibold mt-2'
              name='category'
              id=''>
              <option value='Web Development'> Web Development</option>
              <option value='Digital Marketing'> Digital Marketing</option>
              <option value='Graphics Design'> Graphics Design</option>
            </select>
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Minimum price
            </label>
            <input
              type='number'
              defaultValue={minimumPrice}
              name="minimumPrice"
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder=''
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Maximum price
            </label>
            <input
            defaultValue={maximumPrice}
              type='number'
              name="maximumPrice"
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder=''
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Dead Line
            </label>
            <input
              type='date'
              name="deadLine"
              defaultValue={deadLine}
              
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder=''
              required
            />
          </div>
        </div>

        <div className='mx-auto text-center'>
          <button
            type='submit'
            className='text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Update Card
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default UpdateJob;