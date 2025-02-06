'use client';

import { useEffect } from 'react';
import useStore from '@/store/useStore';

interface QueryInitializerProps {
  children: React.ReactNode;
}

const QueryInitializer = ({ children }: QueryInitializerProps) => {
  const { query, setQuery } = useStore();

  useEffect(() => {
    if (typeof window !== 'undefined' && !query) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const queryString = urlSearchParams.toString();
      if (queryString.trim() !== '') {
        setQuery(`?${queryString}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default QueryInitializer;
