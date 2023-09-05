import { useState, useEffect } from "react";

function useFetchZipcode(url: string) {
  const [zipcode, setZipcode] = useState<any>(null);
  const [loading, setLoading] = useState<null | boolean>(null);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading(null);
    setZipcode(null);
    setError(null);

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setZipcode(res.address.zipcode.replace("-", ""));
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof Error) {
          setError(error.message);
        } else setError("Something went wrong");
      });
  }, [url]);

  return { zipcode, loading, error };
}

export default useFetchZipcode;
