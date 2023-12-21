// LoginPage.js
import React from 'react';



const LoginPage = () => {
  const login = () => {
    window.location.href = "http://localhost:8090/default/authorize?client_id=bookshop&scope=openid+user&response_type=code&response_mode=query&state=1234&nonce=5678&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome";
 
  };

  return (
    <div>  
   {login()}
    </div>
  );
};

export default LoginPage;
