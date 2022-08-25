const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]




const aumentaVidaPokemon = (pokemons) => {

  return { //...pokemon , vida 100 // copia pra mim tudo que tem dentro de pokemon e muda so a vida pra 100
    nome: pokemons.nome ,
    tipo: pokemons.tipo,
    vida: 100,
  }
}


const pokemonsVidaCheia = pokemons.map(aumentaVidaPokemon)// map trazendo todos os pokemons



console.log(pokemonsVidaCheia)




const pokemonsDeFogo = pokemons.filter((pokemons)=>{ // filtrando de pokemnons

  return  pokemons.tipo === `fogo`// filtrando todos os pokemons de fogo


})
console.log(pokemonsDeFogo)










// //TRAZ TODO MUNDO DO ARRAY
// const top1 = pokemons.map( (item, indice, array) => {
//   return item * 3 //traz todos vezes 3
// })


// //TRAZ O ARRAY FILTRADO
// const top2 = pokemons.filter( (item) => {
//   return item % 2 ===0 //traz so os pares
// })





// console.log(top2)
// console.log(top1)





























// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //TRAZ TODO MUNDO DO ARRAY
// const top1 = numeros.map( (item, indice, array) => {
//   return item * 3 //traz todos vezes 3
// })


// //TRAZ O ARRAY FILTRADO
// const top2 = numeros.filter( (item) => {
//   return item % 2 ===0 //traz so os pares
// })

// console.log(top2)
// console.log(top1)