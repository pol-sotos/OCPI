const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get('/ocpi/emsp/versions', (req, res) => {
    const response = {
        data: [
            {
                version: "2.1.1",
                url: "https://ocpi.onrender.com/emsp/versions/2.1.1"
            }
        ],
        status_code: 1000,
        status_message: "Success",
        timestamp: new Date().toISOString()
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});
