import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null),
    [isloding, setLoding] = useState(true),
    [error, satError] = useState(null);

  useEffect(() => {
    const cont = new AbortController();

    fetch(url, { signal: cont.signal })
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
        if (err.name === "AbortError") {
          console.log("abort");
        } else {
          satError(err.message);
          setLoding(false);
        }
      });

    return () => cont.abort();
  }, [url]);

  return { data, isloding, error };
};

export default useFetch;
