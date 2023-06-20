const express = require('express')
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema  = new Schema({
    name : {
        type : String,
        requires : true
    },
    author : {
        type : String,
        required : true

    },
    description : {
        type : String,
        required : true

    },
    price : {
        type : Number,
        required : true

    },
    available : {
        type : Boolean,
        required : true

    },
    image : {
        type : String,
        required : true
    }
})

//  to export the schema, we use : 
module.exports = mongoose.model("Book", bookSchema);

//  by default, the name of database will be "books" (plural of 'Book')
