const express = require('express')
const app = express()
const PORT = 3000

let persons = [
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
    },
    {  
      "id": "unknown",
      "name": "unknown",
      "number": "unknown"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
  })
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id) - 1
  if( persons[id] ){
    response.json(persons[id]) 
  }else{
    response.json(persons['unknown'])
  }
  })
app.get('/info', (request, response) => {
    const currentDate = new Date()
    response.send(`<h2>Phonebook has info for ${persons.length} people</h2> <h2>${currentDate}</h2>`)
  })
  app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})