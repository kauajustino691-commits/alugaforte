# 🛠️ AlugaForte

Plataforma digital para locação de ferramentas e maquinários com simulação de aluguel, estimativa de frete e cálculo de seguro integrado.

🔗 **Protótipo publicado:** [Acessar AlugaForte](https://alugaforte.netlify.app/)

---

## 📋 Visão Geral

O **AlugaForte** foi idealizado para simplificar o processo de locação de equipamentos, tornando as etapas de consulta, cálculo de valores e cobertura de seguro mais transparentes para o cliente. Além do desenvolvimento front-end, o projeto serviu como exercício prático de análise de requisitos, definição de MVP, histórias de usuário e modelagem de processos.

> **Aviso:** Este projeto é um protótipo demonstrativo de portfólio. As etapas de pagamento e contratação simulam o fluxo de experiência do usuário e não realizam transações financeiras ou reservas reais.

---

## ⚙️ Funcionalidades

- **Catálogo de equipamentos:** Exibição organizada de ferramentas e maquinários disponíveis.
- **Simulação de locação:** Cálculo dinâmico baseado na diária do equipamento e período escolhido.
- **Estimativa de frete:** Simulação de custos de entrega.
- **Cálculo automático de seguro:** Aplicação de regras de negócio conforme o valor da diária.

---

## 🛡️ Regras de Negócio (Seguro e Frete)

- **Implementação atual no protótipo (`index.html`):** Equipamentos com diária superior a **R$ 500,00** possuem seguro obrigatório no valor fixo de **R$ 50,00**. Para diárias de até R$ 500,00, o seguro não é cobrado na simulação.
- **Estimativa de frete:** Valor base de **R$ 35,00**, recalculado dinamicamente entre **R$ 25,00 e R$ 100,00** conforme os dígitos finais do CEP informado.
- **Escopo ampliado (Documentação):** Para evolução comercial da plataforma, foram especificadas faixas percentuais progressivas (seguro opcional de 4% abaixo de R$ 500,00; obrigatório de 4% entre R$ 500,00 e R$ 999,99; e obrigatório de 7% a partir de R$ 1.000,00).

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica das páginas.
- **CSS3:** Estilização, layout e organização visual.
- **JavaScript:** Interatividade, manipulação do DOM e regras de cálculo.
- **Netlify:** Hospedagem e deploy contínuo do protótipo.

---

## 📈 Próximas Melhorias

- [ ] Revisar acessibilidade (WCAG), responsividade e usabilidade.
- [ ] Adicionar validação robusta de entradas e testes automatizados para as regras de cálculo.
- [ ] Implementar autenticação de usuários, banco de dados e controle de inventário.
- [ ] Integrar gateway de pagamento real em ambiente seguro.

---

## 👤 Autoria

Documentação e apresentação de portfólio organizadas por **Kauã Justino da Silva** (2026).  
*Nota: O projeto original foi concebido e desenvolvido em equipe; este repositório tem caráter de demonstração individual para portfólio.*
```[cite: 2]

---

### Passo 4: Adicionar o link do site na lateral do repositório (Dica extra)

1. Na página inicial do seu repositório no GitHub, clique no ícone de engrenagem ao lado de **About** (canto superior direito).
2. No campo **Website**, cole: `[https://alugaforte.netlify.app/](https://alugaforte.netlify.app/)`[cite: 2]
3. Em **Topics**, adicione tags como `html`, `css`, `javascript`, `portfolio`, `netlify`.
4. Clique em **Save changes**.

---

Você gostaria de adicionar capturas de tela (prints) do site ao `README.md` (caso consiga reenviar as imagens separadamente) ou precisa de ajuda para subir outros projetos?
