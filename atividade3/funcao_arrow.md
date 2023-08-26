# Arrow Functions ▶️

Uma expressão de arrow function é uma forma mais concisa de escrever funções em comparação com as expressões de função tradicionais. Elas não possuem seu próprio this, arguments, super ou new.target, o que as torna ideais para funções que não são métodos e não podem ser usadas como construtoras.

## Sintaxe Básica 🚀

```javascript
// Sintaxe com bloco de código:
(param1, param2, …, paramN) => {
  // declarações
}

// Sintaxe com retorno de expressão:
(param1, param2, …, paramN) => expression
// equivalente a: => { return expression; }

// Parênteses são opcionais com um único parâmetro:
singleParam => expression

// Para funções sem parâmetros, use um par de parênteses vazios:
() => {
  // declarações
}
```

## Sintaxe Avançada 📖

```javascript
Copy code
// Use parênteses para retornar uma expressão de objeto literal:
params => ({foo: bar})

// Suporte para parâmetros rest e parâmetros padrões:
(param1, param2, ...rest) => {
  // declarações
}
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => {
  // declarações
}

// Desestruturação na lista de parâmetros também é suportada:
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f(); // 6
```
## Descrição 📋

As arrow functions foram introduzidas para criar funções mais curtas e eliminar a complexidade associada à palavra-chave this.

## Resumo 🗞️

As arrow functions são uma forma concisa de escrever funções em JavaScript. ✨ Elas não possuem um this próprio, o que as torna adequadas para funções não-método e não podem ser usadas como construtoras. 🚫 Sua sintaxe básica envolve parâmetros e um corpo de função, que pode ser um bloco de código ou uma expressão de retorno. 📝 Elas também suportam parâmetros rest, parâmetros padrões e desestruturação. 🔄 As arrow functions foram introduzidas para criar funções mais enxutas e resolver problemas comuns relacionados à referência this. 🎯
