import React from 'react';
import { Navigate, Outlet } from "react-router-dom"

export function PrivateRoute() {
  // check if user is logged in
  // If yes, show route
  // Otherwise, navigate to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token')) 
  return isLoggedIn ? <Outlet/> : <Navigate to={'/login'} />
}