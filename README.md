# Projeto de Comunicação Servidor-Cliente

Este projeto consiste em um servidor de comunicação TCP implementado em Node.js utilizando sockets para comunicação em tempo real entre clientes e o servidor, proporcionando uma experiência interativa. Foi criado um protocolo personalizado simples nomeado de PTMP (Protocolo de Transferencia de Mensagem Personalizado). Além disso, o servidor implementa um handler de requisições HTTP simples que responde a solicitações GET com uma mensagem padrão.

## Funcionalidades
### Servidor

O servidor escuta conexões na porta especificada e em todas as interfaces disponíveis.
Mensagens enviadas por um cliente são distribuídas para todos os outros clientes conectados, junto com a identificação do remetente.
Ele pode lidar com solicitações HTTP GET e responder com uma mensagem padrão.

### Cliente

O cliente se conecta ao servidor na porta especificada (por padrão, 4000) e em localhost.
Solicita que o usuário digite um nome e envia para o servidor.
Após enviar o nome, o cliente pode enviar mensagens que serão transmitidas para outros clientes conectados.

### Protocolo Personalizado (PTMP)

Implementado para permitir a troca de mensagens entre clientes conectados ao servidor.
Cada mensagem enviada contém o nome do remetente e a mensagem em si.


## Como Usar

### Configuração do Servidor:

Execute node server.js para iniciar o servidor.

### Configuração do Cliente:

Execute node client.js para iniciar um cliente.
Insira um nome quando solicitado.
Após enviar o nome, você pode começar a enviar mensagens.

### Solicitação HTTP:

Use um navegador ou uma ferramenta como Postman para enviar uma solicitação HTTP GET para http://localhost:4000.

### Encerramento do Servidor:

O servidor pode ser encerrado pressionando Ctrl+C. Isso desconectará todos os clientes antes de fechar.