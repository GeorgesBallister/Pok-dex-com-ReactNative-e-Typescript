import React, { useEffect } from "react";
import api from '../../service/api'
import * as S from './styles'


type PokemonType ={
    type: String

}

type Pokemon ={
    name: string
    id: number
    url: string
    types: PokemonType[]
}


type Request = {
    id: number
    types: PokemonType[]
}

// Tela Inicial com o GIF do Squirtle
export function Home() {


    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('/pokemon')
            const { results } = response.data;


            const payloadPokemons = await Promise.all(

                results.map(async (pokemon: Pokemon) => {
                    const { id, types } = await getMoreInfo(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }


                })

            )


            console.log(payloadPokemons)

        }


        getAllPokemons()
    }, [])


    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url)
        const { id, types } = response.data;

        return {
            id, types
        }
    }


    return <S.Container>

    </S.Container>
}