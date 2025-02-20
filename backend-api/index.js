const express = require('express')
const cors = require('cors');

const app = express()

const mongoose = require('mongoose')

const dotenv = require('dotenv');
const fs = require('fs');

const readdirSync = fs.readdirSync;


const path = require('path');




// // // ALLOW CORS POLICY
// app.use(cors());    


// const corsOptions = {
//     // origin: 'https://codeanew.com', // Allow only your frontend domain
//      origin: ['http://localhost:3000', 'https://codeanew.com'],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // If you need to include cookies in the requests
//     allowedHeaders: 'Content-Type,Authorization'
// };


const corsOptions = {
    origin: ['http://localhost:3000', 'https://codeanew.com'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials such as cookies
    allowedHeaders: 'Content-Type,Authorization,x-access-token', // Allow specific headers
};

app.use(cors(corsOptions));


// ALLOW SEVER SEND FILES TO FRONT-END
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// ALLOW JSON
app.use(express.json());


// const userRoutes = require("./Routes/User")
// const userRoutes = require("./Routes/User")



// ALLOW .env
dotenv.config();


const port_number = `${process.env.PORT_NUMBER}` || 5555;

app.listen(`${port_number}` , ()=>{   
    console.log(`listen success ${port_number}`);
})




mongoose.connect(`${process.env.DB_URL}` ).then((result) => {
    console.log("connected to Db successfully");
}).catch(err => console.log(err))



// app.use("/api/user"  , userRoutes)


readdirSync('./Routes').map((routes)=>{
	app.use('/api', require('./Routes/' + routes))
})


app.get("/", (req , res) => {
    res.json({meta :  "home page"})
});


