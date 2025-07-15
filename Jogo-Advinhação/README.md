# 🎯 Jogo de Advinhação

Um jogo de advinhação interativo e moderno desenvolvido em JavaScript puro, HTML e CSS.

## 📋 Descrição

O computador escolhe um número aleatório entre 1 e 100, e o jogador deve tentar adivinhar qual é esse número. O jogo fornece dicas indicando se o número secreto é maior ou menor que o palpite feito.

## 🚀 Funcionalidades

### 🎮 Jogabilidade
- **Número aleatório**: Entre 1 e 100
- **Dicas inteligentes**: Indica se o número é maior ou menor
- **Validação de entrada**: Impede números inválidos ou repetidos
- **Histórico visual**: Mostra todos os palpites feitos com código de cores
- **Sistema de dicas**: Oferece ajuda após 5 tentativas
- **Contador de tentativas**: Acompanha o progresso do jogador

### 📊 Sistema de Estatísticas
- **Jogos jogados**: Total de partidas
- **Vitórias**: Número de jogos vencidos
- **Melhor score**: Menor número de tentativas para vencer
- **Persistência**: Dados salvos no localStorage do navegador

### 🎨 Interface Moderna
- **Design responsivo**: Funciona em desktop, tablet e mobile
- **Animações suaves**: Transições e efeitos visuais
- **Código de cores**: Visual intuitivo para feedback
- **Tipografia moderna**: Fonte Poppins do Google Fonts
- **Gradientes**: Design atrativo e profissional

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Flexbox e animações
- **JavaScript ES6+**: Lógica do jogo e interatividade
- **Web Storage API**: Persistência de dados
- **Google Fonts**: Tipografia

## 📁 Estrutura do Projeto

```
Jogo-Advinhação/
├── index.html      # Estrutura HTML principal
├── style.css       # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Documentação
```

## 🎯 Como Jogar

1. **Abra o arquivo `index.html`** no seu navegador
2. **Digite um número** entre 1 e 100 no campo de entrada
3. **Clique em "Tentar"** ou pressione Enter
4. **Siga as dicas** para ajustar seus próximos palpites:
   - 🔴 **Vermelho**: Seu palpite foi muito alto
   - 🟢 **Verde**: Seu palpite foi muito baixo
   - 🟡 **Amarelo**: Você acertou!
5. **Tente** acertar com o menor número de tentativas possível
6. **Inicie um novo jogo** clicando no botão "Novo Jogo"

## 🏆 Sistema de Pontuação

- **1-3 tentativas**: Excelente! 🏆
- **4-6 tentativas**: Muito bom! 🥈
- **7-10 tentativas**: Bom! 🥉
- **Mais de 10 tentativas**: Continue praticando! 💪

## 🎨 Características Visuais

### Cores do Feedback
- **Neutro**: Cinza - Mensagens gerais
- **Muito alto**: Vermelho - Número deve ser menor
- **Muito baixo**: Verde - Número deve ser maior
- **Correto**: Amarelo - Acertou o número!

### Responsividade
- **Desktop**: Layout horizontal com duas colunas
- **Tablet**: Layout adaptativo
- **Mobile**: Layout vertical empilhado

## 🔧 Recursos Técnicos

### JavaScript
- **Geração de números aleatórios** com `Math.random()`
- **Manipulação do DOM** para interatividade
- **Event listeners** para entrada do usuário
- **LocalStorage** para persistência de dados
- **Validação de entrada** robusta
- **Gerenciamento de estado** do jogo

### CSS
- **Flexbox** para layout responsivo
- **CSS Grid** para organização
- **Animações CSS** para feedback visual
- **Media queries** para responsividade
- **Variáveis CSS** para consistência de cores
- **Gradientes** para design moderno

## 🚀 Como Executar

1. **Clone ou baixe** os arquivos do projeto
2. **Abra** o arquivo `index.html` em qualquer navegador moderno
3. **Comece a jogar** imediatamente!

### Navegadores Suportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🎮 Melhorias Futuras

- [ ] Sistema de níveis de dificuldade
- [ ] Modo multiplayer
- [ ] Efeitos sonoros
- [ ] Animações mais elaboradas
- [ ] Sistema de conquistas
- [ ] Temas personalizáveis
- [ ] Modo escuro
- [ ] Compartilhamento de resultados

## 📱 Recursos Mobile

- **Touch-friendly**: Botões grandes para facilitar o toque
- **Keyboard responsivo**: Teclado numérico em dispositivos móveis
- **Viewport otimizado**: Design adaptado para telas pequenas
- **Performance**: Otimizado para dispositivos com menor capacidade

## 🔒 Privacidade

- **Dados locais**: Todas as estatísticas são armazenadas localmente
- **Sem cookies**: Não utiliza cookies de terceiros
- **Sem tracking**: Não rastreia informações do usuário
- **Offline**: Funciona completamente offline após o carregamento

Divirta-se jogando e que os números estejam a seu favor! 🍀
