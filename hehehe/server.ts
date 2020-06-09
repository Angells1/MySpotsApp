import express from 'express';

const app = express();

app.get('/', (request, response)=> {
    return response.json({message: 'Hello Live'});
})

app.listen(3333, ()=>{
    console.log('asda')
})

