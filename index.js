const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Welcome to Maac Task Server')
})

app.post('/login', (req, res)=>{
    const user = req.body;
    console.log(user);

    if(user){
        const accessToken = jwt.sign({email: user.email}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'})
        res.send({
            success : true,
            accessToken : accessToken
        })
    }
    else{
        res.send({success: false})
    }
})

app.listen(port, ()=>{
    console.log('Listening to the port', port);
})