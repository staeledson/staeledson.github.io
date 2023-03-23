import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import ContextApp from './ContextApp';

export default function ContextAppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [click, setClick] = useState(0);
  const [usedCard, setUsedCard] = useState('home');


  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setIsLoading(false);
    };
    getData();
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      click,
      setClick,
      usedCard,
      setUsedCard,
    }),
    [
      isLoading,
      setIsLoading,
      click,
      setClick,
      usedCard,
      setUsedCard,
    ],
  );
  return (
    <ContextApp.Provider value={ value }>
      {children}
    </ContextApp.Provider>
  );
}

ContextAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
