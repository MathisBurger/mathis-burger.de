import { ReactNode, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ClientOnlyProps {
  children: ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyProps): JSX.Element => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingSpinner />;
  }
  return children as JSX.Element;
};

export default ClientOnly;
