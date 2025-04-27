# furia-telegram-bot
desafio de fazer um bot para o telegram focando no publico de Counter Strike da FURIA

# FURIA CS2 Telegram Bot 🐆

Desafio de fazer um bot para o Telegram focando no público de Counter Strike da FURIA.

## Funcionalidades 📌

- **Próximas partidas** (`/proxpartida`)
- **Últimos resultados** (`/ultimoresultado`)
- **Elenco atual** (`/jogadores`)
- **Estatísticas do time** (`/estatisticas`)
- **Calendário de jogos** (`/calendario`)
- **Jogadores ao vivo** (`/live`)
- **Probabilidades (odds)** (`/odds`)

## Tecnologias 🛠️

- **Node.js** (v18+)
- **Telegraf.js** (Framework para bots no Telegram)
- **Node-cache** (Cache de dados)

## Instalação ⚙️

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/furia-cs2-bot.git
    cd furia-cs2-bot
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` com suas credenciais:

    ```env
    TELEGRAM_BOT_TOKEN=seu_token_aqui
    ADMIN_ID=123456789 # (Opcional) ID do admin para notificações de erro
    ```

4. Execute o bot:

    ```bash
    npm start
    ```


## Dados Mockados 📝

O bot utiliza dados de exemplo localmente nos seguintes arquivos:

- **matches.js**: Contém informações sobre as partidas (passadas, ao vivo e futuras).
- **players.js**: Contém informações sobre os jogadores da FURIA.
- **stats.js**: Contém as estatísticas do time.
- **odds.js**: Contém as probabilidades de partidas.





