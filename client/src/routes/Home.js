import React from 'react';
import {useNavigate} from "react-router-dom";

function Home(){
    let navigate = useNavigate();
    const routeChangeToLogin = () =>{
        let path = '/login';
        navigate(path);
    }

    const routeChangeToRegister = () =>{
        let path = '/register';
        navigate(path);
    }

    return (
        <div className="container">
            <h1>Welcome to World On Wheels!</h1>

            <h2>Enjoy your ride with us today!</h2>
            <br />
            <div>
                <button onClick={routeChangeToRegister} style={{width: "10%"}}>
                    Register
                </button>
                {' '}
                {/*<button onClick={routeChangeToRegister} style={{width: "10%"}}>*/}
                {/*    Register*/}
                {/*</button>*/}
                {/*{' '}*/}

                <button onClick={routeChangeToLogin} style={{width: "10%"}}>
                    Log in
                </button>


            </div>
        </div>
    );
}
export default Home;