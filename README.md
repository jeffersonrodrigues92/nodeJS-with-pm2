## Node JS com PM2 (Gerencimento de Processos)

Primeiramente é necessário instalar o PM2 na máquina, ele é responsável por gerenciar os processos da aplicação Node JS.

## Para instalação do PM2:
- npm install pm2 -g

## Para iniciar uma instância com PM2:
- pm2 start app.js

Para parar uma instâncias com PM2:
- pm2 stop app.js

Para deletar a instâncias com PM2:
- pm2 delete app.js

Para listar uma instâncias com PM2:
- pm2 list

Para detalhes da aplicação com PM2:
 - pm2 shoqw id

Para ativar Load Balancer com PM2:
- pm2 start app.js -i <Número de Instâncias>

Para ativer o Watch & Restart 
- pm2 start app.js --watch

Para criar um Script pré-definido para ambiente de produção e desenvolvimento
- pm2 init

Documentação: https://pm2.io/doc/en/runtime/overview/
