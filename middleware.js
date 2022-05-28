const express = require('express');


const meddleWere = () => {
    const app = new express();
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
        next();
    });

    app.get('/', (req, res, next) => {
        try {

            res.status(200).json({
                message: 'you are in root'
            });
        } catch (err) {
            next(err);
        }

    })
    return app;
}

module.exports = meddleWere;