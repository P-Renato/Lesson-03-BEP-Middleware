import express from 'express';

const app = express();

app.use(express.json())

app.use((req,res,next)=>{
    console.log('first middleware')
    req.myNum = 555;
    req.headers.myNum = 555;
    res.anotherProp = "hi";
    res.header.anotherProp = "hi";
    next();
})

app.use((req, res, next) => {
    console.log('second middleware')

    req.second = 'hi from second middleware';
    res.secondRes = 'hi from second middleware';
    next();
});

app.use((req, res, next) => {
    console.log('third middleware')

    if(req.url === '/') next()
        else (res.send())

    req.third = 'hi from third middleware';
    res.thirdRes = 'hi from third middleware';
    next();
});

app.get('/', (req,res)=>{
    console.log('req obj: ', req.headers)
    console.log('res obj: ', res.header)
    res.json('this is the response')
})

app.listen(8000, ()=> console.log('Server is running on port 8000'))