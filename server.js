const express = require('express')
const app = express()
const PORT = 3000

let people = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
app.get('/api/persons', (request, response) => {
    response.json(people)
  })
app.post('/api/info', (request, response) => {
    console.log(`I'm trying to post`)
    // const body = request.body
    // const person = {
    //     content: body.content,
    //     date: new Date(),
    // }
  })
  app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})