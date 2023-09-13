import { useState, useEffect } from 'react';

function useLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, []);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return { loading, stopLoading, startLoading };
}

export default useLoading;
