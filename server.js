const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

//postgres://qvxwnuswrzrgsc:d78912db5abab86d9b4dbb579daed3cc7214a6399fcf9252c249be91c4a6426e@ec2-3-217-219-146.compute-1.amazonaws.com:5432/d1pojcs3an4he1

app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.listen(PORT,()=>{
    console.log(`Server Start Port ${PORT}`);
});