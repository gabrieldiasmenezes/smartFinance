# SmartFinance 💰

### Análise Financeira Inteligente com IA Generativa

[![FIAP](https://img.shields.io/badge/FIAP-2025-red)](https://www.fiap.com.br)
[![Firebase](https://img.shields.io/badge/Firebase-AI%20Logic-orange)](https://firebase.google.com)
[![React Native](https://img.shields.io/badge/React%20Native-Mobile-blue)](https://reactnative.dev)

> **Checkpoint CP6** — Projeto com IA Generativa

---

## 🧭 Visão Geral

O **SmartFinance** é um aplicativo mobile inteligente que ajuda o usuário a entender e controlar suas finanças pessoais de forma automatizada, utilizando **Inteligência Artificial Generativa** integrada ao **Firebase AI Logic** (com o modelo **Gemini 2.5 Flash**).

Em vez de preencher planilhas manualmente, o usuário faz upload de um arquivo CSV com seus gastos — e a IA faz o restante: **analisa os dados**, **identifica padrões**, **gera insights personalizados** e até **responde perguntas financeiras** em linguagem natural.

---

## 🎯 Objetivo do Projeto

Desenvolver um aplicativo mobile funcional capaz de:

- 📷 Capturar e processar arquivos CSV de despesas
- 🧠 Utilizar Firebase AI Logic (Gemini 2.5 Flash) para extrair e interpretar informações financeiras
- 💾 Armazenar os dados processados no Firebase Firestore
- 💬 Gerar insights financeiros personalizados e respostas em linguagem natural
- 📊 Exibir gráficos e relatórios interativos
- 🤖 Integrar um chatbot financeiro baseado em IA generativa

---

## ⚙️ Como o App Funciona

### 🔹 1. Upload do Arquivo
O usuário faz upload de um arquivo CSV contendo transações financeiras (como um extrato bancário ou planilha de despesas).

### 🔹 2. Extração e Processamento
O **Firebase AI Logic (Gemini 2.5 Flash)** analisa o conteúdo do arquivo e identifica:
- Data da transação
- Descrição da despesa
- Categoria (alimentação, transporte, lazer etc.)
- Valor gasto

Os dados extraídos são enviados e armazenados com segurança no **Firebase Firestore**.

### 🔹 3. Visualização dos Dados
Na tela principal, o usuário visualiza um **dashboard interativo**, com:
- Total de receitas e despesas
- Gastos por categoria
- Comparativos entre meses
- Gráficos dinâmicos e coloridos

### 🔹 4. Geração de Insights com IA
A IA interpreta os dados e gera textos explicativos como:

> *"Seus gastos com alimentação aumentaram 12% em relação ao mês anterior."*

Esses insights são criados automaticamente pelo **Gemini 2.5 Flash**, utilizando **Firebase AI Logic Chat APIs**.

### 🔹 5. O usuário pode conversar com o assistente financeiro integrado ao app, perguntando:

"Quanto gastei com lazer neste mês?"
"Qual foi minha categoria mais cara no último trimestre?"

A IA responde em tempo real com base nos dados armazenados.

### 🔹 6. Alertas Inteligentes (Feature Extra)
O app envia **notificações automáticas** quando o usuário ultrapassa um limite médio de gastos em determinada categoria.

---

## 🧠 Como a IA é Utilizada

| Dimensão | Descrição |
|----------|-----------|
| **No Aplicativo** | O Firebase AI Logic com o modelo Gemini 2.5 Flash interpreta os dados financeiros, gera relatórios em linguagem natural e responde perguntas via chatbot. |
| **No Desenvolvimento** | O GitHub Copilot foi usado dentro do VS Code para auxiliar na escrita de código, refatoração e geração de trechos integrando o Firebase. |

---

## 🏗️ Arquitetura da Solução

```
[Usuário] 
   ↓ Upload do arquivo CSV
[App React Native]
   ↓ Envia arquivo ao Firebase Storage
[Firebase AI Logic - Gemini 2.5 Flash]
   ↓ Extrai e interpreta dados do arquivo
[Firestore Database]
   ↓ Armazena transações processadas
[Dashboard + Chatbot]
   ↓ Exibe insights e respostas personalizadas
[Usuário]
   ← Recebe relatórios e alertas de gastos
```

---

## 💡 Tecnologias Utilizadas

| Tecnologia | Função |
|------------|--------|
| **React Native** | Desenvolvimento do app mobile |
| **Firebase Firestore** | Banco de dados na nuvem |
| **Firebase Storage** | Armazenamento dos arquivos CSV |
| **Firebase AI Logic (Gemini 2.5 Flash)** | Extração e análise de dados + geração de insights |
| **GitHub Copilot + VS Code** | Desenvolvimento assistido por IA |
| **Chart.js / Recharts** | Visualização gráfica dos gastos |

---

## 🧩 Principais Funcionalidades

✅ Upload e leitura de arquivos CSV  
✅ Extração automática de informações com IA  
✅ Dashboard financeiro com gráficos interativos  
✅ Geração de insights e comparativos automáticos  
✅ Chatbot financeiro com IA generativa  
✅ Notificações inteligentes (alertas de gastos)

---

## ⚙️ Configuração e Execução do Projeto

### 🔧 Pré-requisitos

- Node.js e npm instalados
- Conta configurada no Firebase Console
- Projeto Firebase criado (Firestore, Storage e AI Logic habilitados)

### 📦 Instalação

```bash
# Clone o repositório
git clone ttps://github.com/gabrieldiasmenezes/smartFinance

# Entre na pasta do projeto
cd smartfinance

# Instale as dependências
npm install
```

### 🧩 Variáveis de Ambiente

💡 Para rodar o projeto localmente, é necessário criar um arquivo chamado `.env` na raiz do projeto.

Esse arquivo deve conter as variáveis de ambiente do Firebase referentes ao projeto que você criou.  
Copie e cole os dados diretamente do **Firebase Config** (encontrados no console, em **Project Settings → General → Your Apps → SDK setup and configuration**).

**Exemplo de arquivo `.env`:**

```env
API_KEY=seu_api_key
AUTH_DOMAIN=seu_auth_domain
PROJECT_ID=seu_project_id
STORAGE_BUCKET=seu_storage_bucket
MESSAGING_SENDER_ID=seu_sender_id
APP_ID=seu_app_id
MEASUREMENT_ID=seu_measurement_id
```

Essas variáveis são importadas no arquivo `firebaseConfig.js`, garantindo que o código não exponha credenciais sensíveis no repositório público.

### 🚀 Executando o Projeto

```bash
# Inicie o servidor de desenvolvimento
npm start

# Para Android
npm run android

# Para iOS
npm run ios
```

---

## 🧪 Exemplos de Prompts e Respostas Geradas

### Prompt interno da IA:
```
"Analise o histórico de gastos do usuário e gere um resumo em linguagem 
natural destacando aumentos ou reduções de despesas por categoria."
```

**Resposta gerada:**
> *"Você aumentou seus gastos em transporte em 8% este mês. Considere usar mais transporte público para economizar."*

### Prompt do Chatbot:
```
"Quanto gastei com alimentação este mês?"
```

**Resposta:**
> *"Você gastou R$ 720,00 em alimentação em outubro, representando 28% do total das suas despesas."*

---

## 🧱 Estrutura do Projeto

```
/smartreceipts
├── src
│   ├── components
│   │   ├── Dashboard.js
│   │   ├── Chatbot.js
│   │   └── UploadCSV.js
│   ├── services
│   │   ├── firebaseConfig.js
│   │   ├── aiLogicService.js
│   │   └── firestoreService.js
│   ├── screens
│   │   ├── HomeScreen.js
│   │   └── InsightsScreen.js
│   └── assets
│       └── icons/
├── .env.example
├── package.json
└── README.md
```

---

## 📘 Etapas de Desenvolvimento

1. Configuração do projeto React Native e Firebase
2. Integração com Firebase Storage e Firestore
3. Implementação do upload e leitura de CSV
4. Conexão com o Firebase AI Logic (Gemini 2.5 Flash)
5. Criação do dashboard com gráficos
6. Desenvolvimento do chatbot financeiro
7. Geração de insights automáticos
8. Testes e ajustes finais

---

## 👥 Equipe

**FIAP — 2025**  
Checkpoint CP6 — Projeto com IA Generativa

| Nome | RM |
|------|-----|
| Hellen Marinho Cordeiro | 558841 |
| Heloisa Alves de Mesquita | 559145 |
| Gabriel Dias Menezes | 555019 |

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte do curso da FIAP.

---
