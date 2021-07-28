import { useParams } from 'react-router'
import React from 'react'

export default function CharacterProfile({characters}) {
    const { name } = useParams();
    const character = characters.find((character) => {
        return character.name === name ? character : null;
    })

    return (
        <div>
            <h1>{character.name} was in a starwars movie</h1>
        </div>
    )
}
