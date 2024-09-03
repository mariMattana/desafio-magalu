URL pública: https://desafio-magalu.vercel.app/

# Magalu Front End Teste

## Requisitos

- Deve ser uma SPA “single page application” (dar preferência ao react)
- Não utilizar bibliotecas de UI como: bootstrap, semantic-ui, antdesign
- Utilizar api da Marvel (https://developer.marvel.com/docs)
- Disponibilizar em uma URL pública do projeto rodando para avaliação
- Disponibilizar código em repositório Git de sua preferência, commitando cada fase do seu processo de desenvolvimento
- Seguir layout em [link], respeitando as páginas, features e componentes (não será avaliado “pixel perfect”)

### Home (/characters)

- Exibir os 20 primeiros resultados da API
- Permitir ordenação por nome do personagem
- Permitir filtrar por nome, pelo campo de busca
- Permitir mostrar apenas os personagens favoritos
- Permitir o usuário favoritar/desfavoritar até 5 personagens

(https://github.com/mariMattana/desafio-magalu/tree/main/public/assets/home.png)

### Herói (/characters/:id)

- Exibir dados do personagem
- Exibir últimos 10 quadrinhos lançados deste personagem (onSaleDate)
- Permitir o usuário favoritar/desfavoritar (dentro do limite de 5)

(https://github.com/mariMattana/desafio-magalu/tree/main/public/assets/Herói.png)

## Extras (opcional)

- Adicionar paginação a listagem para exibir além dos 20 personagens iniciais
- Persistir os dados de favoritos (para manter os dados após o reload da página)
- Layout responsivo
- Utilização de ES6+
- Utilização de ferramentas para garantir a qualidade do código
- Teste e2e
- CI/CD

## Desenvolvimento

```shell
git clone https://github.com/mariMattana/desafio-magalu.git
npm i
npm run dev
```

Para os testes

```shell
npm test
```

Aplicação http://localhost:3000
