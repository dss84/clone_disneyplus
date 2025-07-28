# Clone Disney+

Este projeto é um **clone da página inicial do Disney+**, desenvolvido para fins educacionais e de portfólio. Ele simula a interface do serviço de streaming Disney+, trazendo diversos recursos visuais e interativos semelhantes ao site oficial.

## Demonstração

Acesse a versão hospedada: [https://clone-disneyplus-eight-lime.vercel.app](https://clone-disneyplus-eight-lime.vercel.app)

## Funcionalidades

- **Layout responsivo:** Compatível com diferentes tamanhos de tela (desktop, tablet, celular).
- **Seção de Destaque (Hero):** Banner principal com chamada para assinatura e planos do serviço.
- **Abas de Lançamentos e Populares:** Carrossel de títulos com navegação por abas (JavaScript).
- **Planos de Assinatura:** Demonstração dos valores e benefícios para cada tipo de plano.
- **Lista de Dispositivos Compatíveis:** Mostra em quais dispositivos é possível assistir ao conteúdo.
- **FAQ Interativo:** Perguntas frequentes com efeito de acordeão (expande/recolhe respostas).
- **Footer completo:** Com links, seletor de idioma, termos de uso e informações legais.
- **Estilização moderna:** Utilização de SCSS para facilitar manutenção e organização dos estilos.

## Tecnologias Utilizadas

- **HTML5**
- **SCSS/CSS3**
- **JavaScript (Vanilla)**

## Estrutura de Pastas

- `index.html` — Página principal do projeto.
- `src/styles/` — Arquivos `.scss` com a estilização do site.
- `src/scripts/` — Scripts JavaScript para interação (navegação de abas, FAQ, etc).
- `dist/` — Arquivos compilados (CSS, JS, imagens, fontes).

## Scripts principais

- **Navegação por abas:** Permite trocar entre as listas "Em breve", "Mais populares" e "Mais no Star+".
- **FAQ interativo:** Expande e recolhe as respostas ao clicar nas perguntas.
- **Exibição dinâmica do header:** Oculta ou exibe o cabeçalho conforme o scroll.

## Observações

- Este projeto **não possui backend** e não realiza autenticação, compra nem streaming real de conteúdo.
- As imagens, textos e marcas são usados apenas para fins ilustrativos/educacionais.
- Não é afiliado ou mantido pela Disney.

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/dss84/clone_disneyplus.git
   ```
2. Instale dependências (se desejar compilar o SCSS):
   ```bash
   npm install
   ```
3. Compile o SCSS para CSS:
   ```bash
   npm run build
   ```
4. Abra o `index.html` em seu navegador.

## Licença

Este projeto é apenas para fins educacionais. Uso comercial ou distribuição com marca Disney é proibido.

---

Desenvolvido por [dss84](https://github.com/dss84)
