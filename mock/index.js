const express = require('express')
const cors = require('cors')
const app = new express()
const port = 3000

app.use(cors())

const messages = [
    { workerName: 'Larissa', requestFile: true, message: 'Anexe o comprovante de endereço abaixo' },
    { workerName: 'Larissa', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare nulla odio, sit amet condimentum sapien tristique id. Suspendisse potenti.' },
    { workerName: 'Larissa', message: 'Sed ornare nulla odio, sit amet condimentum sapien tristique id. Suspendisse potenti.' },
    { workerName: 'Larissa', message: 'Sed ornare nulla odio, Suspendisse potenti.' },
]

var currentMessage = -1

app.post('/messages', async (req, res) => {
    currentMessage += 1
    res.statusCode = currentMessage >= messages.length ? 500 : 200
    await new Promise(resolve => setTimeout(resolve, 2500))
    await res.send(messages[currentMessage])
    currentMessage = currentMessage >= messages.length ? -1 : currentMessage
})

const messagesFiles = [
    { workerName: 'Larissa', message: 'Um erro ocorreu, Envie o arquivo em formato .pdf ou .doc' },
    { workerName: 'Larissa', message: 'Arquivo recebido com sucesso. Alguma pergunta relevante ?' },
]

var currentMessageFile = 0

app.post('/messages/file', async (req, res) => {
    res.statusCode = currentMessageFile === 0 ? 500 : 200
    await new Promise(resolve => setTimeout(resolve, 2500))
    await res.send(messagesFiles[currentMessageFile])
    currentMessageFile = currentMessageFile >= messagesFiles.length - 1 ? 0 : currentMessageFile + 1
})

app.listen(port, () => {
    console.log(`Mock app listening at http://localhost:${port}`)
})