const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config(); //asi ejecuto dotenv para customizar la llave
const jwt = require('jsonwebtoken');
const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/user");
const path = require('path');
const app = express();
const port = process.env.PORT || 9000;
const indexPath = path.join(__dirname, 'view', 'index.html');
const homePath = path.join(__dirname, 'view', 'home.html');


//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Book manager API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:9000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
}

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
//routes
app.get('/', (req, res) => {
    res.sendFile(homePath); 
});
app.get('/login', (req, res) => {
    res.sendFile(indexPath); 
});

//JWT AUTHENTICATION -------------------->
app.post('/auth', (req, res)=> {
    const { username, password } = req.body;
    const user = {username: username};
    const accessToken = generateaccessToken(user);

    res.header('authorization', accessToken).json({
        message: 'Usuario autenticado',
        token: accessToken
    })
});

function generateaccessToken(user) {
    return jwt.sign(user, process.env.SECRET, {expiresIn: '20m'});
}

function validateToken(req, res, next){
    if(req.method === 'GET') {
        next();
    } else {
        const accessToken = req.headers['authorization'] || req.query.accessToken;
        if(!accessToken) res.send('accesso denegado');

        jwt.verify(accessToken, process.env.SECRET, (err, user)=> {
            if(err){
                res.send('Acceso denegado, el token expiró o es incorrecto');
            }else {
                next();
            }
        });
    }
    
}

app.use('/api',  validateToken, bookRoutes); 
app.use('/auth', userRoutes); 


//mongodb connection
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('Conectado a MongoDB'))
    .catch((err)=>console.error("Error! "));

app.listen(port, () => console.log(`server listening on port http://localhost:${port}`));
