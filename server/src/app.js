console.log("hello");
const express = require('express');
// json 데이터 사용할떄
const bodyParser = require('body-parser');
// 현재 도메인에서 다른 도메인으로 리소스가 사용
const cors = require('cors');
// 
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register',(req,res)=>{
    res.send({
        message:`Hello ${req.body.email}  your user was registered! Have fun1`
    });
})

app.listen(process.env.PORT || 8081);

