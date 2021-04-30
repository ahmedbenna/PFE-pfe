import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default function PatientProtectedRoute({isAuth : isAuth, component : Component, ...rest}) {
    return (
        <div>
            <Route {...rest} render={(props) => {
                if(isAuth) {
                    return <Component/>
                }
                else{
                    return (<Redirect to ={{pathname:'/components/PatientLogin', state: {from : props.location} }}/>)
                }
                 

            }}/>
        </div>
    )
}
