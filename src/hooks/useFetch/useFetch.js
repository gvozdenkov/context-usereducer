import { useState } from 'react';
import { useEffect, useReducer } from 'react';
import { serverConfig } from '../../utils/config';
import { requestFailed, requestStarted, requestSuccessful } from './actions';
import { reducer } from './reducer';

export const useFetch = ({ endpoint, options = {} }) => {
  const [endPoint, setEndPoint] = useState(endpoint);
  
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    data: null,
    error: null,
    setEndPoint,
  });

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(requestStarted());

    const fetchData = async () => {
      try {
        const url = `https://jsonplaceholder.typicode.com/${endPoint}`;
        const res = await fetch(url, {
          // headers: serverConfig.headers,
          // ...options,
          signal: abortController.signal,
        });

        if (!res.ok) {
          throw new Error(`Request Error ${res.status} ${res.statusText}`);
        }

        const data = await res.json();

        dispatch(requestSuccessful({ data }));
      } catch (e) {
        if (!abortController.signal.aborted) {
          dispatch(requestFailed({ error: e.message }));
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [endPoint]);

  return state;
};
