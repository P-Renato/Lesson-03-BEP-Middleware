import express from 'express';

const app = express();
app.use(express.json());
const POST = 6000;

// Logger middleware, runs for all requests 
// This one will always run first
app.use((req,res,next)=>{
    console.log(`req method is: ${req.method} to the route ${req.url}`)
    next();
});

// Header checker, runs for all POST requests
app.use((req,res,next)=>{
    if(req.method === 'POST' && !req.headers.authorization){
        return res.json({error: 'No authorization header'})
    }
    next();
});

// Regular endpoints will never use the 'next()' so it's not added
app.get('/comments', (req,res)=>{
    res.send('Hi from GET /comments')
})

app.post('/comments', (req,res)=>{
    res.send('Hi from POST /comments')
})

app.post('/user/login', (req,res)=>{
    res.send('Hi from POST /user/login')
})

app.listen(POST, ()=>console.log(`Server is running on port  ${POST}`))