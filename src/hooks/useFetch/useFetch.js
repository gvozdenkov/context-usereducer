import { useEffect, useReducer } from 'react';
import { requestFailed, requestStarted, requestSuccessful } from './actions';
import { reducer } from './reducer';

export const useGet = ({ url }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch(requestStarted());

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const json = await response.json();

        dispatch(requestSuccessful({ data: await response.json() }));
      } catch (e) {
        dispatch(requestFailed({ error: e.message }));
      }
    };

    fetchData();
  }, [url]);

  return state;
};
