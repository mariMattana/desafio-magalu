import { useState, useEffect } from 'react';

type RequestStatus = 'idle' | 'fetching' | 'fetched' | 'error';

function useFetchData<T>(url: string) {
  const [data, setData] = useState<Partial<T>>({});
  const [status, setStatus] = useState<RequestStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
        setStatus('fetched');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setStatus('error');
      }
    };

    fetchData();
  }, [url]);

  const isLoading = status === 'fetching';

  return {
    data,
    isLoading,
    status,
    error,
  };
}

export default useFetchData;
