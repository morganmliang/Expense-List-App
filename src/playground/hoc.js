// High Order Component (HOC) - A component that renders another component
// Reuse code
//Render hihacking
// Prop maipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';




const Info = (props) => (
    <div>
        <h1>
            Info
        </h1>
        <p>Info is: {props.info}</p>
    
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return  (props) => (

        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (

        <div>
            {props.isAuthenicated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view the information!</p>
            )
            }
        </div>


    );

};


const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenicated={true} info="There are the details" />, document.getElementById('app'));

