import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { dataFetchReducer } from "./reduce";

export const useDataApi = (initialUrl: any, initialData: any) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({
        type: "FETCH_INIT",
        payload: undefined,
      });

      try {
        const result = await axios(url);

        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({
            type: "FETCH_FAILURE",
            payload: undefined,
          });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return [state, setUrl];
};
