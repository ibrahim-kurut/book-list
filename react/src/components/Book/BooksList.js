import React from 'react';
import { useDispatch } from 'react-redux';

const BooksList = ({ isLoading, books, isLogged, deleteBook }) => {

  const dispatch = useDispatch();

  // handle delete book
  const handleDeleteBook = (id) => {
    // confirme msg
    if (window.confirm('Are you sure you want to delete this book?')) {
      dispatch(deleteBook(id));
    }

  }

  return (
    <div>
      <h2>Books List</h2>
      {
        isLoading ? (<div>Loading...</div>) : (
          <ul className='list-group'>
            {
              books.length > 0 ? books.map((book) => {
                return (
                  <li className='list-group-item d-flex  justify-content-between align-items-center' key={book.id}>
                    <div>{book.title}</div>
                    <div className='btn-group' role='group'>
                      <button type='button' className='btn btn-primary' disabled={!isLogged}>
                        Read
                      </button>
                      <button type='button' className='btn btn-danger' disabled={!isLogged}
                        onClick={() => handleDeleteBook(book.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                )
              }) : "there is no books"
            }
          </ul>
        )
      }
    </div>
  );
};

export default BooksList;
