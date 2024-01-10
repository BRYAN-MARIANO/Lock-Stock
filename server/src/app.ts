import express from 'express';

const app = express();
const PORT = 4000;


app.get('/', (_req, res)=>{
    res.send('hola mundo')
});

app.get('/prueba', (_req, res)=>{
    res.send('adios mundo')
});


app.listen(PORT, ()=>{
    console.log(`app corriendo en http://localhost:${PORT}`)
});
