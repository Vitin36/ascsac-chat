const express = require('express')
const cors = require('cors')
const app = new express()
const port = 3000

app.use(cors())

const messages = [
    { workerName: 'Larissa', workerMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare nulla odio, sit amet condimentum sapien tristique id. Suspendisse potenti.' },
    { workerName: 'Larissa', workerMessage: 'Sed ornare nulla odio, sit amet condimentum sapien tristique id. Suspendisse potenti.' },
    { workerName: 'Larissa', workerMessage: 'Sed ornare nulla odio, Suspendisse potenti.' },
]

var currentMessage = -1

app.post('/messages', async (req, res) => {
    currentMessage += 1
    res.statusCode = currentMessage >= messages.length ? 500 : 200
    await new Promise(resolve => setTimeout(resolve, 2500))
    await res.send(messages[currentMessage])
    currentMessage = currentMessage >= messages.length ? -1 : currentMessage
})

app.listen(port, () => {
    console.log(`Mock app listening at http://localhost:${port}`)
})