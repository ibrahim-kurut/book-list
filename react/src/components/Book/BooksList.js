import React from 'react';

const BooksList = ({ isLoading, books, isLogged }) => {
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
                      <button type='button' className='btn btn-danger' disabled={!isLogged}>
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
