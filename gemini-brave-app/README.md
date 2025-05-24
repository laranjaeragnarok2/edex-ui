# Gemini-Brave App

## Descrição
O Gemini-Brave App é uma aplicação que integra um terminal com abas para o Gemini e um navegador interno baseado no Brave. O projeto permite a interação com o Gemini para modificação de arquivos, além de oferecer uma experiência de navegação na web através do Brave.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

```
gemini-brave-app
├── src
│   ├── main.ts                # Ponto de entrada da aplicação
│   ├── components             # Componentes da interface
│   │   ├── GeminiTab.tsx      # Componente da aba Gemini
│   │   ├── TerminalTab.tsx     # Componente da aba Terminal
│   │   └── BraveBrowserTab.tsx # Componente da aba do navegador Brave
│   ├── services               # Serviços para interações
│   │   ├── geminiService.ts   # Serviço para interagir com o Gemini
│   │   └── braveService.ts     # Serviço para interagir com o Brave
│   ├── types                  # Tipos e interfaces
│   │   └── index.ts           # Tipos utilizados no projeto
│   └── utils                  # Funções utilitárias
│       └── index.ts           # Funções utilitárias do projeto
├── public
│   └── index.html             # HTML principal da aplicação
├── package.json               # Configuração do npm
├── tsconfig.json              # Configuração do TypeScript
└── README.md                  # Documentação do projeto
```

## Instalação
Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd gemini-brave-app
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie a aplicação:
   ```
   npm start
   ```

## Uso
Após iniciar a aplicação, você poderá alternar entre as abas do Gemini e do Brave. Utilize a aba do Gemini para modificar arquivos e a aba do Brave para navegar na web.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença
Este projeto está licenciado sob a [Licença MIT](LICENSE).