import express, { Router } from "express";
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import routes from './src/controllers/index'

app.get('/', (req,res) => {
    res.send('the server is running')
})

app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})

app.use('/api', routes)