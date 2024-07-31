import express from 'express';
import data from './data/mock.json' assert {type: 'json'}

const app = express();

const PORT = 3000;

// using the public folder at the root of the project
app.use(express.static('public'))

//using the images folder  at the route /images
app.use('/images', express.static('images'));

//Using express.json and express.urlencoded 
// app.use(express.json());

app.use(express.urlencoded({extended: true}));

//GET
app.get('/', (request, response) => {
    response.json(data);
})

//Post
app.post('/iteam', (request, response) => {
    console.log(request.body);
    response.send(request.body)
})

//GET with Params
app.get('/class/:id', (request, response) => {
   const studentId =  parseInt(request.params.id);
   console.log(typeof studentId)
   const student = data.filter((iteam) => iteam.id === studentId)
   response.send(student);
})

//Get with next() use for Route handlers use for multiple callbacks
app.get('/next', (request, response, next) => {
    console.log('the response send by next function');
    next();
}, (request, response) => {
    response.send("Second callback")
}
)

// Get - dowload methode
app.get('/dowload', (request, response) => {
    response.download('public/dio.jpg');
})

// Get - redirect method
app.get('/redirect', (request, response) => {
    response.redirect('https://www.google.com');
})

//POST
app.post('/add', (request, response) => {
    response.send("Post request")
})

//PUT
app.put('/update', (request, response) => {
    response.send("Update request")
})

//DELETE
app.delete('/delete', (request, response) => {
    response.send("Delete request")
})

// Route Chanining before
//get 
app.get('/chain', (request,response) => {
    response.send(`Retrive chain info`);
    // response.json(data);
})
//post 
app.post('/chain', (request,response) => {
    response.send(`create Chain info`);
    // response.json(data);// 
})
//put
app.put('/chain', (request,response) => {
    response.send(`update chain info`);
    // response.json(data);
})

//Route chain After
app.route('/hello').get((request, response) => {
    response.send('Get Request');
}).post((request, response) => {
    response.send('Post Request');
}).put((request, response) => {
    response.send('Put Request');
}).delete((request, response) => {
    response.send('Delete Request');
})

//Throw Error
app.get('/err', (request, response) => {
    throw new Error();
})

//Handle Error using callback
app.use((err, request, response, next) => {
    console.error(err.stack)
    response.status(500).send("Somthing is broken")
})

app.listen(PORT, () => {
    console.log(`Server runing port ${PORT}`);
    // console.log(data);
})