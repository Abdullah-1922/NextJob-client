import { Link, NavLink } from 'react-router-dom';
import useMode from '../../Hooks/useMode';
import { FiSun } from 'react-icons/fi';
import { MdModeNight } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
const Navbar = () => {
  const navClass =
    'rounded-xl font-bold   bg-blue-400 hover:text-white hover:bg-blue-700 dark:bg-gray-700 dark:hover:text-black dark:hover:bg-gray-300 px-3 lg:px-4 lg:ml-3 my-1 py-1';
  const navLinks = (
    <>
      <NavLink to={'/'}>
        {' '}
        <li className={navClass}>Home</li>
      </NavLink>
      <NavLink>
        {' '}
        <li className={navClass}>Add job</li>
      </NavLink>
      <NavLink>
        {' '}
        <li className={navClass}>My posted jobs</li>
      </NavLink>
      <NavLink>
        {' '}
        <li className={navClass}>My Bids</li>
      </NavLink>
      <NavLink>
        {' '}
        <li className={navClass}>Bids Request</li>
      </NavLink>
    </>
  );

  const { mode, changeTheme } = useMode();
  const { user,logOut } = useContext(AuthContext);
  console.log('user in navbar ', user);
  return (
    <div className='dark:text-white bg-slate-200 dark:bg-gray-900'>
      <div className='navbar '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost  lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 dark:p-1 shadow dark:bg-black rounded-box w-40'>
              {navLinks}
            </ul>
          </div>
          <img
            className='w-24 '
            src='https://i.ibb.co/9YKYqm9/profile-removebg-preview-1.png'
            alt=''
          />
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <button></button>
        <div className='navbar-end'>
          {mode == 'light' ? (
            <MdModeNight
              className='text-3xl mx-3'
              onClick={changeTheme}></MdModeNight>
          ) : (
            <FiSun className='text-3xl mx-3' onClick={changeTheme}></FiSun>
          )}

          {user ? (
            <div className='flex flex-col '>
              <div className='flex items-center  gap-2'>
                <p className='font-bold'>{user.displayName}</p>
                <img className='w-10 rounded-full' src={user.photoURL} alt='' />
              </div>
              <button className='bg-red-500 hover:bg-black text-white font-semibold py-1 px-3 rounded' onClick={()=>logOut()}>LogOut</button>
            </div>
          ) : (
            <Link to={'/login'} className='btn bg-gradient-to-t from-green-200 via-cyan-200 to-blue-300'>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
