import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from "../../redux/slices/bookSlice"


const PostContainer = () => {

  const { books, isLoading } = useSelector(state => state.books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch])



  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={isLoading} books={books} />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
