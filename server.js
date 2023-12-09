import net from 'net'
import httpRequestHandler from './http/httpRequestHandler.js'
import { clients } from './protocoloPersonalizado/clients.js'
import ptmpRequestHandler from './protocoloPersonalizado/ptmpRequestHandler.js'

const PORT = 4000
const HOST = '0.0.0.0'

const server = net.createServer()

server.listen(PORT, HOST, () => {
  console.log(`Servidor escutando na porta ${PORT}`)
})

server.on('connection', connection => {
  console.log('Alguem se conectou!')

  connection.on('data', data => {
    const strData = data.toString()

    // Lida com requisições http GET
    if (strData.startsWith('GET')) {
      httpRequestHandler(data, connection)
      return
    }

    ptmpRequestHandler(data, connection)

    if (strData === 'end') {
      connection.end(() => {
        console.log('Cliente solicitou desconexão. ')
      })
      return
    }
  })

  connection.on('end', () => {
    clients.
      console.log('Alguem se desconectou!')
  })
})

server.on('close', () => {
  console.log('Servidor desconectado. Desconectando todos os clientes...');
  disconnectAllClients();
})

function disconnectAllClients() {
  clients.forEach((client) => {
    client.connection.end();
  });
}

// Lida com o sinal SIGINT (Ctrl+C) para desconectar clientes antes de encerrar o processo
process.on('SIGINT', () => {
  disconnectAllClientsImmediately()
  setTimeout(() => {
    server.close();
  }, 1000);
});

function disconnectAllClientsImmediately() {
  clients.forEach((client) => {
    client.connection.destroy();
  });
}
