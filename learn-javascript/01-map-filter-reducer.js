// Map Return a new array with the square root of all element values:

//  Exemplo 01

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);

console.log(newArr);

//  Exemplo 02

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

persons.map(getFullName);

function getFullName(item) {
  let name = [item.firstname, item.lastname].join(" ");

  console.log(name);
  return name;
}

//  Filter

// Exemplo 03

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

console.log(result);

function checkAdult(age) {
  return age >= 18;
}

// Exemplo

const empresas = [
  {
    nome: "Samsung",
    valorDeMercado: 50,
    CEO: "Kim Hyun Suk",
    anoDeCriacao: 1938,
  },
  {
    nome: "Microsoft",
    valorDeMercado: 415,
    CEO: "Satya Nadella",
    anoDeCriacao: 1975,
  },
  {
    nome: "Intel",
    valorDeMercado: 117,
    CEO: "Brian Krzanich",
    anoDeCriacao: 1968,
  },
  {
    nome: "Facebook",
    valorDeMercado: 383,
    CEO: "Mark Zuckerberg",
    anoDeCriacao: 2004,
  },
  { nome: "Spotify", valorDeMercado: 30, CEO: "Daniel Ek", anoDeCriacao: 2006 },
  { nome: "Apple", valorDeMercado: 845, CEO: "Tim Cook", anoDeCriacao: 1976 },
];

const anoDeCriacao = empresas.filter((empresa) => empresa.anoDeCriacao > 2000);

console.log(anoDeCriacao);

const exibeInformacoes = empresas.map(
  (empresa) => `${empresa.nome}` + " CEO: " + `${empresa.CEO}`
);
console.log(exibeInformacoes);

const total = empresas.reduce((resultado, quantidade) => {
  return resultado + quantidade.valorDeMercado;
}, 0);

console.log("Valor Mercado das empresas:" + total);

//  Reducer\

// Exemplo 04
