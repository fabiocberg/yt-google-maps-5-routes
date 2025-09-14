# yt-google-maps-5-routes

Aplicação de exemplo que demonstra como traçar e exibir até cinco rotas diferentes utilizando a API do Google Maps em React e TypeScript. Ideal para cenários de comparação, análise logística ou demonstração de recursos avançados de roteamento.

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Configuração da API do Google Maps](#configuração-da-api-do-google-maps)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Customização & Dicas](#customização--dicas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## Sobre o Projeto

O **yt-google-maps-5-routes** é uma aplicação web baseada em **React**, **TypeScript** e **Vite**, que permite ao usuário inserir até cinco pares de localizações (origem e destino) e visualizar todas as rotas simultaneamente no Google Maps, com diferentes estilos e configurações.

Possíveis usos:
- Visualização e comparação de rotas alternativas
- Análise logística para entrega ou transporte
- Demonstração didática do Directions API do Google Maps
- Cenários de planejamento urbano ou turístico

---

## Funcionalidades

- Inserção de até cinco rotas distintas (origem e destino para cada uma)
- Exibição simultânea e colorida de todas as rotas no mapa
- Suporte a diferentes modos de transporte (carro, a pé, bicicleta, transporte público)*
- Atualização dinâmica do mapa conforme o usuário altera as rotas
- Customização de estilos e cores das rotas
- Layout responsivo e otimizado para performance
- Integração com Google Maps JavaScript API e Directions API

*Consulte a implementação para detalhes sobre modos de transporte suportados.

---

## Tecnologias Utilizadas

- **React** + **TypeScript**
- **Vite** (build e dev server)
- **Google Maps JavaScript API** e **Directions API**
- **Styled Components**, **TailwindCSS** ou **CSS Modules** (ajustável)
- **State Management:** Context API, Redux ou Zustand (conforme implementação)
- **dotenv** (configuração de ambiente)
- **ESLint/Prettier** (padronização)

---

## Como Executar

### 1. Pré-requisitos

- Node.js v18 ou superior
- npm ou yarn
- Conta Google Cloud com API Key (habilite Google Maps JS API e Directions API)

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configuração da API do Google Maps

Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API:

```
VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
```

> ⚠️ Sua chave deve habilitar as APIs: Google Maps JavaScript API e Directions API.

### 4. Execute em modo desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse: [http://localhost:5173/](http://localhost:5173/)

### 5. Build para produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados estarão na pasta `dist/`.

---

## Estrutura de Diretórios

```
/
├── src/
│   ├── components/      # Componentes reutilizáveis (Map, RouteInput, RouteList, etc.)
│   ├── hooks/           # Custom React Hooks (ex: useDirections)
│   ├── pages/           # Páginas principais da aplicação
│   ├── styles/          # Temas, variáveis globais, utilitários de estilo
│   ├── types/           # Tipagens TypeScript personalizadas
│   ├── utils/           # Funções utilitárias
│   └── App.tsx          # Componente principal
├── public/
│   └── index.html
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

---

## Customização & Dicas

- **Mais de 5 rotas:** Altere o limite de rotas diretamente no componente responsável pelo input.
- **Estilização das rotas:** Personalize cores e estilos em `src/components/Map.tsx` ou similar.
- **Modos de transporte:** Modifique as opções permitidas no componente de input de rotas.
- **Restrições da API:** Atente-se ao limite de requisições simultâneas da Directions API.
- **API Key segura:** Restrinja o uso da chave por domínio e evite expor em repositórios públicos.
- **Testes:** Implemente testes com Jest e React Testing Library para maior robustez.

---

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork este repositório
2. Crie um branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Faça push para o branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## Licença

MIT

---

> Dúvidas, sugestões ou problemas? Abra uma issue ou envie um pull request!