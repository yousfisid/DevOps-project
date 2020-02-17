const express = require('express')
const userRouter = require('./routes/users')

const app = express()
const port = 3001


app.get('/', (req, res) => res.send('Hello World!'))

//.app.use('/user', userRouter)

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = server
