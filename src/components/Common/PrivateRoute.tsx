import React from 'react';
import { Navigate, Route, RouteProps } from "react-router-dom"

export function PrivateRoute(props: RouteProps) {
  // check if user is logged in
  // If yes, show route
  // Otherwise, navigate to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  if (!isLoggedIn) return <Navigate to={'/login'} />
  return (
    <Route {...props}/>
  )
}