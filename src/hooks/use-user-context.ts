import { useContext } from 'react';
import { UserContext, UserContextType } from '@/context/user-context';

export const useUserContext = (): UserContextType  => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('UserContext is not provided');
  }
  return context;
}