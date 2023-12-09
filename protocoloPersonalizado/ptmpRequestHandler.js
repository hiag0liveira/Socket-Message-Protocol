// PTMP = Protocolo de Transferencia de Mensagem Personalizado
import { clients } from "./clients.js"

export default function ptmpRequestHandler(data, connection) {
  const requestData = data.toString()

  if (requestData.startsWith('Nome:')) {
    addClient(requestData, connection)
    const clientName = getClientName(connection)
    connection.write(`Olá ${clientName}!`)
    return
  }

  const clientName = getClientName(connection)
  broadcastMessage(connection, clientName, requestData)
}

const broadcastMessage = (sender, senderName, message) => {
  clients.forEach(client => {
    if (client.connection !== sender) {
      try {
        client.connection.write(`${senderName}: ${message}`)
      } catch (error) {
        console.log(error)
      }
    }
  })
}

function addClient(data, connection) {
  const clientName = data.split(' ')[1]
  clients.push({
    name: clientName,
    connection
  })
}

function getClientName(connection) {
  const client = clients.find((element) => element.connection === connection)
  return client.name
}