import net from 'net'
import readline from 'readline'

const client = new net.Socket()
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let nameWasSend = false

client.connect(4000, 'localhost', () => {
  console.log('Conectado!')
  console.log('Digite seu nome: ')

  rl.addListener('line', line => {
    if (nameWasSend) {
      client.write(line)
    }
    else {
      client.write(`Nome: ${line}`)
      nameWasSend = true
    }

  })

  client.on('data', data => {
    console.log(data.toString())
  })

  client.on('end', () => {
    console.log('Desconectado do servidor...')
    process.exit()
  })
})