const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get('/ocpi/versions', (req, res) => {
    const response = {
        data: [
            {
                version: "2.1.1",
                url: "https://ocpi.onrender.com/ocpi/versions/2.1.1"
            },
            {
                version: "2.2",
                url: "https://ocpi.onrender.com/ocpi/versions/2.2"
            }
        ],
        status_code: 1000,
        status_message: "Success",
        timestamp: new Date().toISOString()
    };

    res.json(response);
});

app.get('/ocpi/versions/2.1.1', (req, res) => {
    const response = {
        data: {
            version: "2.1.1",
            endpoints: [
                {
                    identifier: "credentials",
                    url: "https://ocpi.onrender.com/ocpi/2.1.1/credentials"
                },
                {
                    identifier: "tokens",
                    url: "https://ocpi.onrender.com/ocpi/2.1.1/tokens"
                },
                {
                    identifier: "commands",
                    url: "https://ocpi.onrender.com/ocpi/2.1.1/commands"
                },
                {
                    identifier: "locations",
                    url: "https://ocpi.onrender.com/ocpi/2.1.1/locations"
                },
                {
                    identifier: "sessions",
                    url: "https://ocpi.onrender.com/ocpi/2.1.1/sessions"
                },
                {
                    identifier: "cdrs",
                    url: "https://ocpi.onrender.com/ocpi/2.1.1/cdrs"
                },
                {
                    identifier: "tariffs",
                    url: "https://ocpi.onrender.com/ocpi/2.1.1/tariffs"
                }
            ]
        },
        status_code: 1000,
        status_message: "Success",
        timestamp: new Date().toISOString() 
    };

    res.json(response);
});

app.get('/ocpi/versions/2.2', (req, res) => {
    const response = {
        data: {
            version: "2.2",
            endpoints: [
                {
                    identifier: "credentials",
                    url: "https://ocpi.onrender.com/ocpi/2.2/credentials"
                },
                {
                    identifier: "tokens",
                    url: "https://ocpi.onrender.com/ocpi/2.2/tokens"
                },
                {
                    identifier: "commands",
                    url: "https://ocpi.onrender.com/ocpi/2.2/commands"
                },
                {
                    identifier: "locations",
                    url: "https://ocpi.onrender.com/ocpi/2.2/locations"
                },
                {
                    identifier: "sessions",
                    url: "https://ocpi.onrender.com/ocpi/2.2/sessions"
                },
                {
                    identifier: "cdrs",
                    url: "https://ocpi.onrender.com/ocpi/2.2/cdrs"
                },
                {
                    identifier: "tariffs",
                    url: "https://ocpi.onrender.com/ocpi/2.2/tariffs"
                }
            ]
        },
        status_code: 1000,
        status_message: "Success",
        timestamp: new Date().toISOString()
    };

    res.json(response);
});



app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});
