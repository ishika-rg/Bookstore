// console.log("Hello world ! this is a mern project!!!")

// Cmf4jH4v9M9BA5xT

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const router = require('./routes/bookRoutes')


// middleware
// app.use("/", (req, res, next) => {
//     res.send('This is the starting app!')
// })

app.use(cors())             // because of browser security, allows to useresources from another server
app.use(express.json())    //it allows info to paas in json everywhere in server
app.use('/books', router)   //http://localhost:5000/books (MAIN ROUTE)

mongoose.connect('mongodb+srv://user_ig:ishika1234@cluster1.bp0dxez.mongodb.net/booksData', 
{
useNewUrlParser : true,
useUnifiedTopology : true}
)

.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5000)
    console.log("Port at 5000")
})
.catch((err) => {
    console.log(err)
})


// mongoose.connect('mongodb+srv://ishika:ishika12345@cluster0.3zivozs.mongodb.net/bookstore')
// .then(() => console.log("Connected to Database"))
// .then(() => {
//     app.listen(5000)
//     console.log("Port at 5000")
// })
// .catch((err) => {
//     console.log(err)
// })