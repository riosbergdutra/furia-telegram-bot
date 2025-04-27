# furia-telegram-bot
desafio de fazer um bot para o telegram focando no publico de Counter Strike da FURIA

FURIA CS2 Telegram Bot 🐆
Um bot para acompanhar a equipe de CS2 da FURIA no Telegram, com informações sobre partidas, jogadores, estatísticas e transmissões ao vivo.

📌 Funcionalidades
Próximas partidas (/proxpartida)

Últimos resultados (/ultimoresultado)

Elenco atual (/jogadores)

Estatísticas do time (/estatisticas)

Calendário de jogos (/calendario)

Jogadores ao vivo (/live)

Probabilidades (odds) (/odds)

🛠️ Tecnologias
Node.js (v18+)

Telegraf.js (Framework para bots no Telegram)

Node-cache (Cache de dados)

⚙️ Instalação
Clone o repositório:

bash
git clone https://github.com/seu-usuario/furia-cs2-bot.git
cd furia-cs2-bot
Instale as dependências:

bash
npm install
Crie um arquivo .env com suas credenciais:

env
TELEGRAM_BOT_TOKEN=seu_token_aqui
ADMIN_ID=123456789 # (Opcional) ID do admin para notificações de erro
Execute o bot:

bash
npm start
📊 Estrutura do Projeto
furia-cs2-bot/
├── commands/            # Comandos do bot
│   ├── calendar.command.js
│   ├── lastResult.command.js
│   ├── live.command.js
│   ├── nextMatch.command.js
│   ├── odds.command.js
│   ├── players.command.js
│   └── stats.command.js
├── data/                # Dados mockados
│   ├── matches.js
│   ├── odds.js
│   ├── players.js
│   └── stats.js
├── services/            # Lógica de serviço
│   └── service.js
├── utils/               # Utilitários
│   ├── cache.js
│   ├── errorHandler.js
│   ├── helpers.js
│   └── logger.js
├── bot.js               # Configuração principal do bot
├── index.js             # Ponto de entrada
└── README.md
📝 Dados Mockados
O bot utiliza dados de exemplo em:

matches.js: Partidas (passadas, ao vivo e futuras)

players.js: Jogadores da FURIA

stats.js: Estatísticas do time

odds.js: Probabilidades de partidas



