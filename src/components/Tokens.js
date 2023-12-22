import React, { useEffect, useState } from 'react';

const Tokens = ({ setAccessToken }) => {
    const [tokens, setTokens] = useState({});
    useEffect(() => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");

        if (!code) {
            return;
        }

        const data = {
            code: code,
            grant_type: "authorization_code",
            scope: "openid user",
            redirect_uri: "http://localhost:3000/",
            client_id: "bookshop",
        };

        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch("http://localhost:8090/default/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "origin": "http://localhost:3000",
            },
            body: formBody
        }).then((response) => {
            return response.json();
        }).then((responseJson) => {
            console.log("set");
            setTokens(responseJson);
            setAccessToken(responseJson);
        });
       

    }, []);

    return ;
}

export default Tokens;
