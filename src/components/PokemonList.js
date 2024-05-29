export default function PokemonList({ pokemonList, getPokemon, page, setPage }){
    return (
        <ol className='poke-list'>
            <h1>Pokemon List</h1>
            {
                pokemonList.map((poke, index)=>(
                    <li key={index}>
                    <span onClick={()=>getPokemon(poke.name)}>{poke.name}</span>
                    </li>
                ))
            }
            <div className='actions-container'>
            <button disabled={page === 1} onClick={()=>setPage(page-1)}>Prev</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
            </div>
        </ol>
    )
}