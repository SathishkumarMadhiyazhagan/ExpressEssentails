# Express Essentails

# 1 Installation and First Steps: Node.js and Express

## Getting Started: server and project setup
## Express Basics with scrath

### Getting Started: Server and project setup

mkdir [foldername]

cd [foldername]

### intial package.json filenpm init
npm init;

### install dependencesnpm install express nodemon
npm install express nodemon

### install dev dependences for javascript compiler 
Babel packages are used for javascript compiler

npm install -D @babel/core @babel/preset-env @babel/node @bable/cli

config package.json file to add 

"type": "module"

inside script add

 "start": "nodemon --experimental-json-modules --exec babel-node index.js",

create .babelrc file to config

Add below object

{
    "presets": ["@babel/preset-env"]
}

after that go mockaroo site to generate json file

## Express generator

using this package to set skeleton of express project easy.

npx express-generator

npm install express-generator -g

express -h

express --git --hbs [nameofapp]

cd [namofapp]

npm install

to run app

set DEBUG=[nameofapp]:*; npm start

# 2 Express Basics

### changes in package.json file
add 'types': 'modules' use for import, export modules inside files
create new script
"Start": "nodemon --experimental-json-modules --exec babel-node index.js"
nodemon is user for reload server automatically if we made any changes in index file ones saved it automatically reload or refresh server
--experimental-json-modules tages use for json files
--exec babel-node index.js it execute index.js file in babel-node

### create file
.babelrc
{    
    "presets": ["@babel/preset-env"]
}
index.js

### Adding data to your server
use mockaroo.com to create json and download data file

### Postman tool
Use Postman tool to test server CRUD method

### Serving static files with Express
serve static file use buildin middelware fuction express.static() that we will pass app.use() this methode is bulid in express use to middelware functions.

# 3 Express Roucting Fundamentals

### Routing Parameters
Route Params declared with colon operator in path.

app.get(`/class/:id`, (req, res) => {    
    let reqId = Number(req.params.id);
    var student = data.filter((stud) => stud.id === reqId);
    res.send(student);
})

### Route handlers
Route handles are block of code that handle logic for your route this can be a form of function, array fuction and combination of both.

### Response Methods
.json() : Sends a json response
.send() : Sent the http response
.dowload() : Transfers the fils as a attachment
.redirect() : Redirects the user to the specified path....

### route chaining
when creating routs with express special with more complex projects we may have several routes with same path but using different methods using the method route on our app,we can chain several methods together to keep our code clean and easy to understand.

# 4 Middelware

Middelware function are functions that have access to the request object, the response object and next function in the application's request-response cycle.

Middelware functions can perform the following steps

1 Execute any code2 make changes to the request and response objects3 end the request-response cycle4 call the next middelware in the stack

### Bulitin Middelware functions

express.static(): Server static assets included files and images
express.json(): Parses incoming requenst with json payloads
express.urlencoded(): Parses incoming req uest with URL-encounded payloads

using middelware app.use(express.json())
if we want to test use postman or other resources to do that configadd headers with key as content-type and value as application/json
select body should be raw and some object like {'item': 'hero'}
app.use(express.encodedurl()) comment app.use(express.json())

change headers to content-type should be application/x-www-form-urlencoded
add key and value to that

### Handling errors

handling error is important to manage for that we use some middelware before listen
app.use((err, req, res, next) => {
    console.log(err.stack);    
    res.status(500).send("Somthing is broken")
})

# Taking Express one step furture

## Debug your Express Application
Express uses the debug module internally to log infromation about route matches, middelware functions that are in use, application mode, and the flow of the request-response cycle

set DEBUG=express:* & node --experimental-json-modules index.js

add above things in scripts in package.json file

## using express with database

Database integrationAdding the capability to connect databases to Express apps is just a matter of loading an appropriate Node.js driver for the database in your app. This document briefly explains how to add and use some of the most popular Node.js modules for database systems in your Express app

# 5 Security Concerns and Best Practices

Make sure you are using the most up-to-date version of Express
Use Transport Layer Security(TLS)
Use Helmet
Use cookies securely
