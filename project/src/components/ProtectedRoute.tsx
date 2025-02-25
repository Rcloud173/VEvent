import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps, UserRole } from '../types/auth';

// This is a temporary mock until we implement actual authentication
const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'student' as UserRole,
  contact: '1234567890'
};

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  // Replace this with actual auth logic later
  const isAuthenticated = true;
  const userRole = mockUser.role;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}