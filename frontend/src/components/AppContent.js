import * as React from 'react';
import WelcomeContent from './WelcomeContent';
import AuthContents from './AuthContent';

export default class AppContent extends React.Component{
    render(){
        return(
            <div>
                <WelcomeContent/>
                <AuthContents/>
            </div>
        );
    };
}