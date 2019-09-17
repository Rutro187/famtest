require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const admin = require('firebase-admin');
const functions = require('firebase-functions');
const bodyParser = require("body-parser")

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
app.get('/', (req, res) => res.send('Hello World!'))
