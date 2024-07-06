import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
const Header = () => {
  const { error } = useSelector(state => state.books)
  const { isLogged } = useSelector(state => state.auth)

  console.log(isLogged);
  const dispatch = useDispatch()

  // create toggle isLogged function
  const toggleIsLogged = () => {
    dispatch(logout())
  }

  return (

    <>

      {
        error && (<div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>)

      }

      <nav className='navbar navbar-dark bg-dark'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button className='btn btn-outline-primary' type='submit' onClick={toggleIsLogged}>
          {isLogged ? 'Logout' : 'Login'}
        </button>
      </nav>





    </>
  );
};

export default Header;
