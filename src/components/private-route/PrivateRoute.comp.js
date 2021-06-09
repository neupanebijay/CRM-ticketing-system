import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { DefaultLayout } from '../../Layout/DefaultLayout';


// if is Auth true  means if is loggen in
const isAuth = true;
// const isAuth = false;
export const PrivateRoute = ({children, ...rest}) => {
    return (
       <Route {...rest}       
          render={()=>isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />}
       
       />       
            
    )
}
