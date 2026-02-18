import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollEffect = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const routeKey = location.pathname;

  useEffect(() => {
    setIsScrolled(false);
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [routeKey]);

  return isScrolled;
};
