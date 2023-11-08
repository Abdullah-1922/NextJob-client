/* eslint-disable react/prop-types */
import axios from 'axios';
import { BiSolidTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const JobCart = ({ job, refetch }) => {
  
  const {
    email,
    jobDescription,
    jobTitle,
    category,
    minimumPrice,
    maximumPrice,
    deadLine
  } = job || {}
  const handleJobDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/alljobs/${id}`).then((res) => {
          if (res.data.deletedCount == 1) {
            Swal.fire({
              title: 'Good job!',
              text: 'Your Job post has been deleted!',
              icon: 'success',
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div
        className='p-5 py-10 mx-auto rounded-3xl min-w-[320px] max-w-[400px] bg-gradient-to-t from-green-200 via-cyan-200 to-blue-300
            dark:from-slate-800 space-y-2 font-semibold dark:via-slate-800 dark:to-slate-800  dark:text-white
            '>
        <p className='text-xl mb-4 font-bold'> Category : {category} </p>
        <p>Email : {email} </p>
        <p className='font-bold'>Job Title : {jobTitle} </p>
        <p className='overflow-x-hidden'>
          Description : {jobDescription}
        </p>
        <div>
          Price range : {minimumPrice}$ - {maximumPrice}$
        </div>
        <p>Dead Line: {deadLine}</p>
        <div className='flex gap-4 mx-auto pt-5  justify-center'>
          <Link to={`/updatejob/${job._id}`}>
            <button
              className='group  rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75'
              href='/download'>
              <span className='block rounded-sm dark:bg-slate-600 bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent'>
                <div className='flex gap-3'>
                  {' '}
                  Update{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='h-5 w-5'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                    />
                  </svg>
                </div>
              </span>
            </button>
          </Link>
          <button
            onClick={() => handleJobDelete(job._id)}
            className='group  rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75'
            href='/download'>
            <span className='block rounded-sm dark:bg-slate-600 bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent'>
              <div className='flex gap-3'>
                {' '}
                Delete <BiSolidTrash className='text-xl'></BiSolidTrash>
              </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCart;
