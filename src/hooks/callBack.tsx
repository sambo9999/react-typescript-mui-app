import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

export const CallBackFunction = () => {
  const [group, setGroup] = useState<any>([]);

  const fetchDataGroup = useCallback(async () => {
    try {
      const Data: any = await axios(
        "http://api.open-notify.org/iss-now.json"
      ).then((item) => setGroup(item.data));
    } catch (err: any) {
      console.error(err.message);
    }
  }, []);

  console.log("Data", group);
  useEffect(() => {
    fetchDataGroup();
  }, []);
  return <div>CallBackFunction</div>;
};
