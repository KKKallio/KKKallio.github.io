'use client';

import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data, { birthDate } from '@/data/profile';

export default function ProfileIcons() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [liveAge, setLiveAge] = useState<string>('');

  const calculateAge = useCallback(() => {
    const now = new Date();
    const thisYearBirth = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    const lastBirth = now >= thisYearBirth 
      ? thisYearBirth
      : new Date(now.getFullYear() - 1, birthDate.getMonth(), birthDate.getDate());

    const nextBirth = new Date(lastBirth.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate());

    const years = lastBirth.getFullYear() - birthDate.getFullYear();
    const msSinceLast = now.getTime() - lastBirth.getTime();
    const msTotalYear = nextBirth.getTime() - lastBirth.getTime();
    
    return (years + (msSinceLast / msTotalYear)).toFixed(8);
  }, []);

  useEffect(() => {
    setMounted(true); 
    const timer = setInterval(() => {
      setLiveAge(calculateAge());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateAge]);

  if (!mounted) return null;

  return (
    <ul className="profile-icons">
      {data.map((item) => (
        <li key={item.id}>
          <FontAwesomeIcon icon={item.icon} /> 
          <span suppressHydrationWarning>
            {item.id === 'age' ? `${liveAge} years` : item.initialLabel}
          </span>
        </li>
      ))}
    </ul>
  );
}
