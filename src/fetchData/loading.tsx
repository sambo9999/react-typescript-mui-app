import axios from "axios";
import React, { useEffect, useState } from "react";

export const Loading = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    try {
      const Data: any = await axios(
        "http://api.open-notify.org/iss-now.json"
      ).then((item) => item.data);
      setData(Data);
      console.log(Data);
    } catch (err: any) {
      console.error(err.message);
    }
    setLoading(false);
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
      {loading ? (
        <div>loading...</div>
      ) : (
        <ul>
          {data.map((item: any) => (
            <li key={item.userId}>
              <a>{item.userId}</a>
              <a>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
