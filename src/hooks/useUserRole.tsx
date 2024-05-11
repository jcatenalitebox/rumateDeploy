import { UserRoleEnum } from '@/types';
import constate from 'constate';
import { useState } from 'react';

const useUserRoleContext = () => {
  const [userRole, setUserRole] = useState<UserRoleEnum>();

  return {
    userRole,
    setUserRole,
  };
};

export const [UserRoleProvider, useUserRole] = constate(useUserRoleContext);
