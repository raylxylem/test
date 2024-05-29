export default function PokemonProfile({ pokemon }){
    return (
        <div className='pokemon-container'>
          <h1>{`${pokemon.name} - ${pokemon.types[0].type.name} Type`}</h1>
          <img src={pokemon.sprites.front_default}/>
          <ul>
            <li>{`Pokedex ID: ${pokemon.id}`}</li>
            <li>{`Height: ${pokemon.height}`}</li>
            <li>{`Weight: ${pokemon.weight}`}</li>
            <li>
              <span>Move List</span>
              <ul>
                {
                  pokemon.moves.map((move, index)=>(
                    <li key={index}>{move.move.name}</li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </div>
    )
}