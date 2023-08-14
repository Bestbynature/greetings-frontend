import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import { fetchMessage } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  const { message, loading } = useSelector((store) => store.greetings);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div className="greeting">
      {loading && <Loader />}
      <div className="card">
        <div className="card-header">
          Message for today
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{message.message}</p>
          </blockquote>
        </div>

      </div>
    </div>
  );
};

export default Greeting;
