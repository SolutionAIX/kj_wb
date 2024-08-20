// src/components/AuthGuard.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RootState } from '../store/useAuth';
import TopNavbar from '@/components/navbar/top-navbar';

interface AuthGuardProps {
  children: React.ReactNode;
  redirectPath?: string;
  requireAuth: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, redirectPath = '/login', requireAuth }) => {
  const { user, isLoggedIn } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (requireAuth && !isLoggedIn) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  } 

  if(!requireAuth && isLoggedIn && (location.pathname == '/login' || location.pathname == '/register')){
    return <Navigate to="/guide"/>
  }

  if (requireAuth && isLoggedIn && user && !user.is_subscribed && location.pathname === '/guide') {
    return <Navigate to="/activate-guide" replace />;
  } 

  if (isLoggedIn && user && user.is_subscribed && location.pathname === '/activate-guide') {
    return <Navigate to="/guide" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
