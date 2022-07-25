import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null),
    [isloding, setLoding] = useState(true),
    [error, satError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("no data for salah");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoding(false);
        satError(null);
      })
      .catch((err) => {
        satError(err.message);
        setLoding(false);
      });
  }, [url]);

  return { data, isloding, error };
};

export default useFetch;
