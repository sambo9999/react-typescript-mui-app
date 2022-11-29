import axios from "axios";
import React, { useEffect, useState } from "react";

export const Error = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    setIsError(false);
    try {
      const Data: any = await axios(
        "http://api.open-notify.org/iss-now.json"
      ).then((item) => item.data);
      setData(Data);
      console.log(Data);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      <ul>
        {data.map((item: any) => (
          <li key={item.userId}>
            <a>{item.userId}</a>
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
