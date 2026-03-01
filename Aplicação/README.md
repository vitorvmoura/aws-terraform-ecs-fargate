# 💻 Aplicação: Frontend Portfólio (Figma to Code)

Esta pasta contém o código-fonte da interface do usuário que é servida pela nossa infraestrutura na AWS.

## 🎨 Origem do Design
A interface foi concebida e exportada a partir do **Figma**, com o objetivo de servir como uma aplicação real para testes de estresse, deploy e escalabilidade em ambiente Cloud.

## 🛠️ Stack Tecnológica
- **Framework:** [Vite](https://vitejs.dev/)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Servidor de Produção:** Nginx (via Docker)

## 🐳 Dockerização
Para garantir que a aplicação rode exatamente da mesma forma em qualquer ambiente, utilizamos o **Multi-stage Build**.
1. **Estágio de Build:** Usa Node.js para instalar dependências e compilar o código TS/Vite.
2. **Estágio de Produção:** Usa Nginx Alpine (leve e seguro) para servir apenas os arquivos estáticos gerados.

## 🚀 Desenvolvimento Local
Caso queira rodar apenas a aplicação sem a infraestrutura AWS:
```bash
npm install
npm run dev

Ou via Docker:
docker build -t app-teste .
docker run -p 8080:80 app-teste
