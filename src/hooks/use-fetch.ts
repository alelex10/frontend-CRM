import { useEffect, useState } from "react";

interface Props {
  url: string;
  options?: RequestInit;
}

function useFetch({ url, options }: Props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch inicial
  useEffect(() => {
    const fetching = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, {
          method: "GET",
          ...options,
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetching();
  }, []);
  return { data, loading, error };
}

export default useFetch;
