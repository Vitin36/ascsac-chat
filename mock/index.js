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
    { workerName: 'Larissa', message: 'O que achou do nosso atendimento ? <div style="display:flex; flex-direction: column"><div style="display: flex"><input type="radio" /> <label>Bom</label></div></div>' }
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

var serviceQueue = [
    {
        isWaiting: true,
        currentPosition: 3,
        waitingTime: '00:10:00'
    },
    {
        isWaiting: true,
        currentPosition: 1,
        waitingTime: '00:1:00'
    },
    {
        isWaiting: false,
        currentPosition: 0,
        waitingTime: '00:00:00'
    }
]

var currentServiceQueue = 0

app.post('/service/queue', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 2500))
    await res.send(serviceQueue[currentServiceQueue])
    currentServiceQueue = currentServiceQueue >= serviceQueue.length - 1 ? 0 : currentServiceQueue + 1
})

app.listen(port, () => {
    console.log(`Mock app listening at http://localhost:${port}`)
})