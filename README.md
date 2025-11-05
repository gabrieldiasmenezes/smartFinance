# SmartFinance 💰

### Análise Financeira Corporativa Inteligente com IA Generativa

[![FIAP](https://img.shields.io/badge/FIAP-2025-red)](https://www.fiap.com.br)
[![Firebase](https://img.shields.io/badge/Firebase-AI%20Logic-orange)](https://firebase.google.com)
[![React Native](https://img.shields.io/badge/React%20Native-Mobile-blue)](https://reactnative.dev)

> **Checkpoint CP6** — Projeto com IA Generativa

---

## 🧭 Visão Geral

O **SmartFinance** é um aplicativo mobile inteligente que transforma planilhas corporativas complexas em dashboards interativos e intuitivos, utilizando **Inteligência Artificial Generativa** integrada ao **Firebase AI Logic** (com o modelo **Gemini 2.5 Flash**).

Em vez de analisar planilhas manualmente, o usuário faz upload de um arquivo CSV com dados financeiros trimestrais da empresa — e a IA faz o restante: **processa os dados**, **gera visualizações interativas**, **cria cards de KPIs**, **divide orçamentos por departamento** e até **responde perguntas financeiras** em linguagem natural.

---

## 🎯 Objetivo do Projeto

Desenvolver um aplicativo mobile funcional capaz de:

- 📷 Capturar e processar arquivos CSV de dados financeiros corporativos
- 🧠 Utilizar Firebase AI Logic (Gemini 2.5 Flash) para extrair e interpretar informações financeiras trimestrais
- 💾 Armazenar os dados processados no Firebase Firestore organizados por trimestres
- 📊 Transformar planilhas em dashboards interativos com:
  - **Cards de KPIs** (receita, despesa, lucro)
  - **Gráficos dinâmicos** por trimestre
  - **Divisão de orçamento por departamento** (Engenharia, Financeiro, Operações Gerais, Produtos, RH e Talentos, Suporte e CS, Vendas)
- 💬 Gerar insights financeiros corporativos e respostas em linguagem natural
- 🤖 Integrar um chatbot financeiro baseado em IA generativa

---

## ⚙️ Como o App Funciona

### 🔹 1. Upload do Arquivo
O usuário faz upload de um arquivo CSV contendo dados financeiros corporativos organizados por trimestres (Q1, Q2, Q3, Q4).

### 🔹 2. Extração e Processamento de Dados Trimestrais
O **Firebase AI Logic (Gemini 2.5 Flash)** analisa o conteúdo do arquivo e extrai dados trimestrais:
- **Receita** do trimestre
- **Despesas** do trimestre
- **Lucro** do trimestre
- **Orçamento por departamento**:
  - Engenharia
  - Financeiro
  - Operações Gerais
  - Produtos
  - RH e Talentos
  - Suporte e CS
  - Vendas

Os dados extraídos são enviados e armazenados com segurança no **Firebase Firestore**, organizados por trimestre (Q1, Q2, Q3, Q4).

### 🔹 3. Visualização em Dashboard Interativo
Na tela principal, o usuário visualiza um **dashboard corporativo interativo**, com:

**Cards de KPIs:**
- Total de receitas anual
- Total de despesas anual
- Lucro líquido anual

**Gráficos Dinâmicos:**
- Evolução trimestral de receita, despesa e lucro
- Comparativo entre trimestres
- Distribuição de orçamento por departamento

**Divisão Departamental:**
- Visualização clara do orçamento alocado para cada departamento em cada trimestre

### 🔹 4. Geração de Insights com IA
A IA interpreta os dados corporativos e gera análises como:

> *"O lucro do Q2 aumentou 15% em relação ao Q1, impulsionado pela redução de 8% nas despesas operacionais."*

> *"O departamento de Vendas teve o maior orçamento alocado no Q3, representando 23% do total."*

Esses insights são criados automaticamente pelo **Gemini 2.5 Flash**, utilizando **Firebase AI Logic Chat APIs**.

### 🔹 5. Chatbot Financeiro Corporativo
O usuário pode conversar com o assistente financeiro integrado ao app, perguntando:
- *"Qual foi o lucro do Q2?"*
- *"Quanto foi alocado para o departamento de Engenharia no primeiro trimestre?"*
- *"Qual trimestre teve a maior receita?"*
- *"Compare as despesas entre Q1 e Q3"*

A IA responde em tempo real com base nos dados armazenados no Firestore.

### 🔹 6. Alertas Inteligentes (Feature Extra)
O app envia **notificações automáticas** quando há variações significativas nos KPIs ou quando um departamento ultrapassa o orçamento previsto.

---

## 🧠 Como a IA é Utilizada

| Dimensão | Descrição |
|----------|-----------|
| **No Aplicativo** | O Firebase AI Logic com o modelo Gemini 2.5 Flash interpreta os dados financeiros trimestrais, transforma planilhas em dashboards interativos, gera relatórios em linguagem natural e responde perguntas via chatbot. |
| **No Desenvolvimento** | O GitHub Copilot foi usado dentro do VS Code para auxiliar na escrita de código, refatoração e geração de trechos integrando o Firebase. |

---

## 🏗️ Arquitetura da Solução

```
[Usuário] 
   ↓ Upload do arquivo CSV (dados trimestrais)
[App React Native]
   ↓ Envia arquivo ao Firebase Storage
[Firebase AI Logic - Gemini 2.5 Flash]
   ↓ Extrai dados: receita, despesa, lucro e orçamento por departamento
[Firestore Database - Estrutura Trimestral]
   ↓ Armazena dados organizados por Q1, Q2, Q3, Q4
[Dashboard Interativo]
   ↓ Gera Cards de KPIs + Gráficos + Divisão Departamental
[Chatbot Financeiro]
   ↓ Responde perguntas sobre dados corporativos
[Usuário]
   ← Visualiza insights, KPIs e análises trimestrais
```

---

## 💡 Tecnologias Utilizadas

| Tecnologia | Função |
|------------|--------|
| **React Native** | Desenvolvimento do app mobile |
| **Firebase Firestore** | Banco de dados na nuvem (estrutura trimestral) |
| **Firebase Storage** | Armazenamento dos arquivos CSV |
| **Firebase AI Logic (Gemini 2.5 Flash)** | Extração e análise de dados trimestrais + geração de insights |
| **GitHub Copilot + VS Code** | Desenvolvimento assistido por IA |
| **Chart.js / Recharts** | Visualização gráfica dos dados financeiros |

---

## 🧩 Principais Funcionalidades

✅ Upload e leitura de arquivos CSV corporativos  
✅ Extração automática de dados trimestrais com IA  
✅ Dashboard financeiro com cards de KPIs interativos  
✅ Gráficos dinâmicos de evolução trimestral  
✅ Divisão de orçamento por departamento  
✅ Comparativo entre trimestres (Q1, Q2, Q3, Q4)  
✅ Geração de insights corporativos automáticos  
✅ Chatbot financeiro com IA generativa  
✅ Notificações inteligentes (alertas de variações e orçamento)

---

## ⚙️ Configuração e Execução do Projeto

### 🔧 Pré-requisitos

- Node.js e npm instalados
- Conta configurada no Firebase Console
- Projeto Firebase criado (Firestore, Storage e AI Logic habilitados)

### 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/gabrieldiasmenezes/smartFinance

# Entre na pasta do projeto
cd smartfinance

# Instale o Expo
npm install expo

# Instale as dependências do projeto
npm install

# Atualize os pacotes para evitar possíveis erros de compatibilidade
npx expo install --fix
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
"Analise os dados trimestrais e gere um resumo executivo destacando 
variações de lucro, despesas e alocação orçamentária por departamento."
```

**Resposta gerada:**
> *"O Q2 apresentou crescimento de 15% no lucro em relação ao Q1. As despesas operacionais foram reduzidas em 8%, enquanto o departamento de Vendas recebeu a maior alocação orçamentária, com R$ 31 milhões."*

### Prompt do Chatbot:
```
"Qual foi o desempenho financeiro do primeiro trimestre?"
```

**Resposta:**
> *"No Q1, a empresa registrou receita de R$ 725 milhões, despesas de R$ 543 milhões e lucro líquido de R$ 182 milhões. O departamento de Produtos teve a maior alocação orçamentária com R$ 42 milhões."*

### Prompt do Chatbot:
```
"Compare o orçamento de Engenharia entre Q1 e Q2"
```

**Resposta:**
> *"O departamento de Engenharia teve orçamento de R$ 36 milhões no Q1. Verificando os dados do Q2..."*

---

## 🧱 Estrutura do Projeto

```
/smartfinance
├── src
│   ├── components
│   │   ├── Dashboard.js
│   │   ├── KPICards.js
│   │   ├── DepartmentBudget.js
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
5. Criação da estrutura trimestral no Firestore
6. Desenvolvimento de cards de KPIs
7. Criação de gráficos dinâmicos por trimestre
8. Implementação da divisão de orçamento por departamento
9. Desenvolvimento do chatbot financeiro corporativo
10. Geração de insights automáticos
11. Testes e ajustes finais

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
