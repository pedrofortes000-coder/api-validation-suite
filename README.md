# API Validation Suite

Este repositório contém uma suíte de testes automatizados voltada para a validação de APIs RESTful em sistemas de recrutamento e gestão de talentos. O foco é garantir a integridade dos dados, a conformidade com as regras de negócio e a estabilidade das comunicações.

## 🎯 Objetivo
Validar endpoints de entrada e saída (inputs/outputs), assegurando que o sistema processe corretamente as solicitações de usuários e mantenha a consistência dos dados.

## 🛠️ Tecnologias Utilizadas
* **Linguagem/Framework:** JavaScript / Cypress
* **Metodologia:** Testes de Contrato e Testes Funcionais de API.
* **Ferramentas de Apoio:** Git para versionamento.

## 🧪 Escopo de Testes
A suíte está estruturada para cobrir os seguintes cenários:

1. **Testes de Sucesso (Happy Path):**
   - Validação de `Status Code` 200/201.
   - Verificação de estrutura (JSON Schema).

2. **Testes de Exceção (Negative Testing):**
   - Validação de `Status Code` 400 (Bad Request).
   - Validação de mensagens de erro.

## 🚀 Como Executar
1. Clone o repositório: `git clone https://github.com/SEU-USUARIO/api-validation-suite.git`
2. Instale as dependências: `npm install cypress --save-dev`
3. Execute a suíte de testes: `npx cypress run`

---
*Projeto desenvolvido com foco em qualidade de software, estabilidade e boas práticas de automação.*
