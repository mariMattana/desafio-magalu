import { useState, useEffect } from 'react';
import { CharactersData, RequestStatus } from '@/types';

function useClassesFetchData(url: string) {
  const [data, setData] = useState<Partial<CharactersData>>({});
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
        const result = await response.json();
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

export default useClassesFetchData;
