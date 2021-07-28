import { Link } from 'react-router-dom';
import React from 'react';

function CharacterList({ characters }) {
    return (
        <div>
            {characters.map(character => {
                return (
                    <Link to={`character/${character.name}`}>
                        <h1>{character.name}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

export default CharacterList


