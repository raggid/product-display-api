const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const consign = require("consign");

module.exports = () => {
    app = express();

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set("port", process.env.PORT || config.get("server.port"));

    // MIDDLEWARES
    app.use(bodyParser.json());

    // ENDPOINTS
    consign({ cwd: 'api' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};
