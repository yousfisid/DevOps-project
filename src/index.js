const express = require('express')
const userRouter = require('./routes/users')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/user', userRouter)

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = server
