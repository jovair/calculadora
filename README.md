# Calculadora do windows 10 em HTML

<!-- [![Hcode Treinamentos](https://www.hcode.com.br/res/img/hcode-200x100.png)](https://www.hcode.com.br) -->

Calculadora desenvolvida como exemplo do Curso Completo de JavaScript na Udemy.com.

## Projeto

![Calculadora](https://firebasestorage.googleapis.com/v0/b/hcode-com-br.appspot.com/o/calculadora-hcode-win.png?alt=media&token=218a8f2a-b800-4d03-92e8-9e493a4e949f)

O Projeto Calculadora é parte do curso de JavaScript oferecido pela Hcode. Na primeira parte do treinamento foi construída uma calculadora cuja a estrutura visual dela foi com base em uma imagem SVG. A proposta foi de introduzir, principalmente o conceito de Programação Orientada a Objetos e conhecer os comandos básicos de JavaScript.

Nesta fase, foi proposto o desafio de construir outra calculadora com html puro. Esse layout tem a mesma aparência de uma calculadora do Windows 10, lembrando que o curso foi gravado em 2018 e eu estou fazendo o curso em 2021. Evidentemente que a calculadora atual do Windows 10 tem outro layout e mais recursos.

> ### Importante
>
> O curso proposto é de JavaScript e portanto, não será abordado nenhum aspecto de HTML e CSS a não ser os ajustes que forem necessários para fazer o JavaScript funcionar. Futuramente poderá essa documentação poderá ser expandida a todo o projeto, para desenvolvedores que estão iniciando, assim como eu, tenham uma compreensão maior dessas três estruturas que compõem uma aplicação.

## Estrutura do projeto

A estrutura básica fornecida pela [Hcode](https://github.com.br) pode ser encontrada em [calculadora](https://github.com/hcodebr/curso-javascript-projeto-calculadora-win). Ao fazer o clone/fork do projeto, será encontrado o seguinte:

- Pasta node_modules contendo a estrutura bootstrap/sass que fornece o estilo da calculadora;
- index.html com o código HTML;
- README.md inicial, que neste caso está sendo desenvolvida toda essa documentação.

## Orientação a Objetos e MVC

Programação Orientada a Objetos - POO é uma forma de programar. Na Programação Orientada a Objetos a regra de negócio fica agrupada em classes, que podem ser utilizadas integral ou parcialmente.

### Classe

Uma classe é um conjunto de atributos e métodos. A classe por si só não contém dados. Ela é a estrutura, composta por atributos e métodos estruturados em trechos de código, que são equivalentes às variáveis e funções respectivamente. Esses trechos de código podem ser reutilizados sempre que precisar. Comparando uma classe a uma sala de aula, seria como se essa sala tivesse um professor e vários alunos distribuídos em grupos e cada grupo estivesse executando uma atividade diferente. O grupo de alunos seria equivalente ao método e cada aluno que fosse responsável por uma tarefa específica dentro desse grupo, seria o atributo.

### Objeto

Um objeto é o método utilizado para se utilizar uma classe. Toda vez que essa classe precisa ser utilizada, é criado um objeto que a represente. É como se fosse tirada uma cópia da classe para poder utilizar naquele momento. Quando um objeto chama uma classe, ele recebe toda a sua estrutura, insere dados dentro dela para que sejam produzidos os resultados esperados.

### Instância

Instância é quando um objeto representa uma classe, ou seja, o momento da ação em que o objeto está recebendo uma cópia da classe e executando as atividades necessárias.

### Método

É um conjunto de instruções composto por atributos, variáveis, funções e outros métodos para produzir um resultado.

Sintaxe:

```javascript
nomeDoMetodo() {
  this._atributo;
  let variavel = 'valorDaVariavel';
  ()=>{};
}
```

### Atributo

- Um atributo é similar a uma variável, porém, com mais recursos. Dentro de uma classe, o atributo ou método é identificado com a palavra reservada this. Ele faz referência ao objeto que foi instanciado. Ex.: Dois objetos são instanciados simultaneamente, chamando a classe Calculadora para executar operações diferentes. O this vai identificar a qual instância pertence cada comando e vai executar tarefas distintas.
- Sintaxe: `this.displayCalc = "0";`

### Conceito de MVC

MVC é a abreviatura de Model View Controller. Conceitualmente o **MVC** é uma organização entre os dados (model), o que é exibido (view) e as regras de negógio (controller), que são camadas distintas, facilitando a manutenção da aplicação. O **view** é a interface onde o usuário interage com a aplicação. As regras de negócio que dizem como as informações transitam na aplicação é determinada pelo **controller** e o **model** trata os dados. É ele quem vai até o banco de dados e acessa todas as informações trafegadas.

### Encapsulamento

- É o processo que controla o acesso a um atributo ou método. Existem três níveis de encapsulamento:
  - Public - todos acessam;
  - Protected - Atributos e métodos da mesma classe e classe pai;
  - Private - somente atributos e métodos da própria classe.

**Nota:** Um atributo ou método privado distingue-se do público por usar \"\_" antes do seu nome. Ex.: `this._displayCalc = "0";"`

**Nota 1:** O atributo `this._currentDate` não recebeu nenhum valor. Isso significa que é um atributo não definido ou undefined. Ele deverá receber valor em algum momento por meio de um método.

### DOM/BOM

- BOM (Browser Object Model) é a janela do navegador. Por exemplo, o comando para fechar a janela do navegador é `windwow.close`. onde close é uma propriedade de window.
- DOM (Document Object Model) é o conteúdo do próprio site. Tudo o que está contido no código HTML faz parte do DOM. Neste projeto foi criado o objeto calculator e sempre que a página HTML é carregada pelo navegador, para acessar as propriedades da calculadora, basta digitar `document.calculator` ou simplesmente `calculator`, porque calculator é uma propriedade que está dentro de document, assim como document está dentro de `window.document`.

- No JavaScript é possível manipular, tanto a janela quanto o documento, dependendo da necessidade. A manipulação do DOM/BOM deve ser feita de modo controlado, porque ao fazer essas manipulações estamos alterando informações que já foram renderizadas. A manipulação é feita por meio dos eventos, que são reações às ações externas, como o click de um botão ou a passagem do mouse sobre determinada área ou objeto.

- Cada tag ou elemento HTML é um objeto dentro do documento. No console do Inspector do Chrome, com o método document é possível ver todos os elementos HTML da página, já com a função dir() é possível ver todos esses elementos em forma de objeto.

**Nota:** ao inspecionar objeto window, estamos vendo todos os métodos e atributos da janela do navegador, notamos que o objeto tem um par de chaves logo após o seu nome. Isso significa que não é uma ação, portanto, não é um método. Todo método possui um par de parênteses indicando que ele executa uma ação. Ex.: `window.close()` window = objeto e close() é o método que fecha a janela do navegador.

**Nota 1:** Window é o objeto que engloba tudo o que está dentro da janela, inclusive document. Nesse caso, document se torna um método dentro de window, mas quando nos referimos a ele, propriamente dito, é o objeto que será referenciado em toda a manipulação do DOM.

### Getters and setters

Um atributo ou método privado não deveria ser acessado por um objeto, porém, no JavaScript é possível, mas, por convenção, não se faz isso, até porque, as únicas finalidades de se acessar um atributo é para ver o que tem dentro dele ou para alterar o seu valor. Nesse caso, usa-se os métodos nativos get e set, respectivamente para pegar ou alterar o seu valor.

### Browser adotado

O Browser escolhido para desenvolver o projeto e ver o resultado de cada passo da execução do código passo a passo foi o Google Chrome. Sabemos que existem diferenças de comportamento entre eles e como eu não sou um programador experiente, vou seguir o conselho daqueles que estão à minha frente e são minha referência no aprendizado.

> #### Inspecionar
>
> O Google Chrome possui uma ferramenta fantástica para desenvolvedores que nos ajuda em todo o caminho até a finalização do código. O inspetor permite o acesso ao código, exibindo todos os elementos HTML e o console, que permite executar qualquer código HTML, CSS e JS, além de mostrar eventuais erros na estrutura que foi carregada. Para carregar o inspetor de elementos, clique sobre a tela do navegador com a página que está em desenvolvimento carregada e escolher a opção inspecionar, a última do menu. O comando de atalho é o Ctrl + Shift + I. Para ir direto para o console, a tecla de atalho é a F12.

## Mão na massa

Daqui por diante começaremos a desenvolver a aplicação da calculadora. Neste momento a única coisa que temos dela é o seu arquivo HTML que recebi da Hcode, como mencionado antes, que pode ser carregado pelo navegador.

Para que o index.html seja reconhecido pelo JavaScript é preciso adicionar as tags script e apontá-las para as pastas onde se encontram esses arquivos. Além disso, fiz outra alteração no nome da classe de algumas tags do teclado. Originalmente ele foi agrupado em duas classes distintas: a classs `btn_number`, que fazem referência ao teclado numérico e a class `btn-others`, apontando para todas as outras teclas. Para atender à minha lógica de programação, foi criada a classe `btn-calc`, que identifica todas as teclas que fazem algum tipo de cálculo.

### Atualização da estrutura

Seguindo o padrão MVC, O primeiro passo para começar o projeto é a criação da estrutura do JavaScript. Como boa prática de programação, foi criada a pasta assets, onde ficarão todos os ativos do projeto e dentro desta pasta foi criada a pasta js e dentro dela o arquivo calculator.js. Esse arquivo é responsável por criar o objeto calculadora, que será explicado posteriormente.

Dentro da pasta js foi criada a pasta controller e dentro dela, o arquivo calcController.js. Ele contem a classe calcController, responsável pelas operações da calculadora.

As tags HTML que fazem referência a esses arquivos estão no final do `<body>`. A ordem em que eles são chamados é imprescindível. O primeiro que deve ser encontrado é o arquivo contendo a classe e em seguida o que contem o objeto, porque para que um objeto seja criado, ou seja, para que a classe seja instanciada, ela precisa existir.

```javascript
// Chama os arquivos do JavaScript
<script src="assets/js/controller/calcController.js"></script>
<script src="assets/js/calculator.js"></script>
</body>
```

### Objeto calculator

O objeto calculator é o responsável por executar a classe CalcController. Como ele está na tag script do arquivo index.html, sempre que um elemento receber uma requisição do JavaScript, ele vai chamar a classe `CalcController{}` e em seguida o objeto `calculator = new CalcControler`, ou seja, vai instanciar a classe, criando um novo objeto, pronto para receber dados e efetuar as operações da calculadora.

#### Lógica da estrutura

- `calculator = new CalcController()` é uma forma abreviada de `window.calculator = new CalcController()`. Essa é a sintaxe para criar ou instanciar uma classe. window é um objeto _BOM_. Ele pertence à estrutura do navegador e está implícito no código. Veja na imagem abaixo, que com ou sem window, o resultado é o mesmo;

  - Resultado mostrado pelo console do inspetor:
    ![Window](assets/images/windowScreen.png)

- new significa que vai criar uma nova instância da classe.
- CalcController() executa o método construtor `calcController()`. Se esse método precisasse de parâmetros para ser executado, eles viriam dentro dos parênteses.

```javascript
calculator = new CalcController();
```

## Classe CalcController{}

Como boa prática, o nome de uma classe deve ser iniciado com letra maiúscula, diferente de atributos, que devem ser iniciados com letra minúscula. O padrão de nomes adotados pelo JavaScript para nomes de atributos é o camelCase, que inicia com letra minúscula e se o nome do arquivo for de múltiplas palavras, elas são iniciadas com letra maiúscula.

Todo o funcionamento da calculadora está dentro dessa classe. Cada atributo e método criado será devidamente documentado para que qualquer pessoa que esteja começando a programar, ou mesmo um desenvolvedor experiente que queira apenas inserir uma calculadora em seu projeto, saiba todos os detalhes de seu funcionamento, podendo, inclusive fazer alterações no seu código.

### Método constrcutor()

O método construtor tem a finalidade de sincronizar a classe com o código HTML. Ele é executado automaticamente todas as vezes que a classe é instanciada. Como boa prática, ele deve estar no topo do arquivo.

- sintaxe: `constructor(){}`

  - Os parênteses recebem os parâmentros para que o método funcione. No caso da calculadora não houve necessidade de receber nenhum parâmetro. Se um método receber mais de um parâmetro, eles vêm separados por vírgula
  - as chaves recebem as instruções do que deve ser feito.

- O Atributo `this_.displayCalcEl` é responsável pela exibição dos dados do objeto no display da calculadora. Os dados são exibidos dentro da tag com o id #display, portanto, o `this_.displayCalcEl` recebe esse elemento por meio da propriedade nativa do JavaScript `document.querySelector("#display")`.

```javascript
class CalcController {
  constructor() {
    this._displayCalcEl = document.querySelector("#display");
  }
}
```

### Métodos get displayCalc() e set displayCalc()

Esses são os métodos get e set deste projeto. todos os métodos executam uma ação com o objetivo final de produzir um resultado para os alimentar.

- O método `get displayCalc()` retorna o valor para o atributo `this._displayCalcEl.innerHTML`. Toda vez que esse valor sofre uma mudança por quaisquer métodos da clase, ele é exibido no display da calculadora. Os eventos ocorridos dentro da classe com o objetivo de produzir um resultado, são, de modo geral, números, strings, arrays, etc, que não estão no formato dos elementos HTML. Para que seja possível exibir o resultado dentro da tag do display, a sua propriedade é manipulada pelo innerHTML.

- O método `set displayCalc()` é responsável por atualizar o valor do atributo `this._displayCalcEl` para que seja retornado para o display da calculadora. A sintaxe para executar esse método é `displayCalc = valor`.

### innerHTML

O innerHTML é uma propriedade do objeto que pode ser manipulada pelo DOM, coverter o conteúdo de uma variável em HTML e exibir o seu valor dentro de um elemento HTML do qual ele faz parte. Essa é uma das poucas propriedades que vai fugir à convenção de nomes, iniciando com letra minúscula e terminando com HTML todas as letras em maiúsculo.

```javascript
get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }
  set displayCalc(value) {
    if (value.toString().length > 11) {
      this.setError();
      return false;
    }
    this._displayCalcEl.innerHTML = value;
  }
```

## Iniciando o teclado da calculadora

O teclado está dividido em três tipos de teclas:

- As numéricas, as que fazem algum tipo de cálculo e as demais, com outras finalidades.

Cada uma delas é identificada com três classes:

- a classe btn, para identificar todas elas de uma única vez; a classe btn-?, para clasificálas em grupo e a classe col-sm, do Bootstrap.

Os grupos para identificá-las são:

- btn-number para identificar as teclas numéricas;
- btn-calc para identificar as teclas de cálculo;
- btn-others para identificar as demais.

### Métodos initButtonsEvents() e addEventListenerAll()

O método initButtons é o responsável por carregar todas as teclas para o JavaScript. Para isso ele usa a propriedade nativa do JS `querySelectorAll()` que está dentro do objeto document. O evento `document.querySelectorAll` seleciona todos os elementos da classe `.btn`, que corresponde a todas as teclas e armazena na variável buttons.
Esses elementos são carregados dentro de suas tags, como pode ser visto pelo inspetor.
![querySelectorAll](assets/images/querySelectorAll.png)

Como pode ser visto, os elementos são identificados pelos seus índices que vão de 0 a 23. `click drag` são dois eventos distintos do mouse. o primeiro responde ao click do mouse e o segundo responde ao drag, que significa arrastar. Eles são eventos que são acionados pelo `addEventListener()`, que é o evento nativo do JS que fica "escutando" as operações do mouse para dar uma resposta. Isso quer dizer que se o usuário clicar no botão e inadivertidamente arrastar o mouse dentro dele, a tecla desejada será acionada. Aqui nós temos um problema, porque o `addEventListener()` só consegue escutar um evento de cada vez. Para contornar esse problema, foi criado o método `addEventListenerAll()`. Veja que ele é chamado pelo `this.addEventListenerAll()`, passando os parâmetros necessários para ser executado.

Ao perceber o click do mouse, o `addEventListenerAll()` é executado da seguinte forma:

- O parâmetro events recebe os parâmetros do `initButtonsEvents()`. `click drag` é recebido pelo events como uma string, como pode ser visto abaixo.

![ClickDrag](assets/images/clickDrag.png).

Esse formato não pode ser reconhecido como um evento, pois cada nome representa uma função. Para isso eles precisam ser transformados em array. A função nativa do JS split tem a capacidade de transformar uma lista de nomes dentro de uma string em arrays e para fazê-lo precisa encontrar um elemento em comum entre cada pedaço dessa string. No nosso exemplo, como são só dois itens, o espaço é o elemento comum aos dois. O Split pega os dois itens de events e os transforma em um array, que agora pode ser executado pelo `forEach()`, que os reconhece como sendo elementos distintos, podendo ser "ouvidos" pelo `addEventListener()`. Os elementos recebidos no parâmetro element são os botões do teclado. Ao perceber o click, o drag ou os dois simultaneamente, aquele botão clicado é colocado dentro do array e será acionado pelo `addEventListener()`. Na eventualidade dos dois eventos serem reconhecidos, seria produzido um resultado inesperando no display da calculadora, pois seriam considerados dois eventos. Para evitar possíveis erros, é passado o false que desconsidera o último evento.
