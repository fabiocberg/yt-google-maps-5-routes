# yt-google-maps-5-routes

## Descrição

O `yt-google-maps-5-routes` é uma aplicação web desenvolvida com React, TypeScript e Vite, que demonstra como traçar e exibir até cinco rotas diferentes utilizando a API do Google Maps. Ideal para estudos, experimentos e como base para projetos de geolocalização que exigem múltiplas rotas simultâneas.

## Arquitetura

- **Frontend:** React + TypeScript + Vite
- **API de mapas:** Integração com Google Maps JavaScript API e Directions API
- **Estilização:** (Adicionar detalhes, ex: TailwindCSS, Styled Components, CSS Modules)
- **Gerenciamento de estado:** (Adicionar detalhes, ex: Redux, Zustand, Context API)

## Como executar localmente

1. **Pré-requisitos**
   - Node.js v18+ instalado
   - npm ou yarn

2. **Instalação**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configuração**
   - Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Google Maps:
     ```
     VITE_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
     ```

4. **Execução em modo desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesso**
   - A aplicação estará disponível em: http://localhost:5173/

## Build para produção
```bash
npm run build
# ou
yarn build
```
Os arquivos otimizados estarão na pasta `dist/`.

## Observações

- Certifique-se de que sua chave da API do Google Maps possui permissões para as APIs necessárias.
- Para detalhes sobre customização de rotas, consulte a documentação dos componentes ou entre em contato com o responsável técnico.

---

> **Nota:** Para dúvidas, sugestões ou contribuições, consulte a documentação interna ou entre em contato com o responsável técnico.