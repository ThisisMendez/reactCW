import React from 'react'

const Ninjas = ({ninjas}) => { 
    // const { ninjas } = props; //want to cycle through the dom, than I reconstructed in ()
    const ninjaList = ninjas.map(ninja => { 
        return (
        <div className="ninja" key={ninja.id}>
            <div>Name: { ninja.name }</div>
            <div>Age: { ninja.age }</div>
            <div>Belt: { ninja.belt }</div>
        </div>
        )
    })
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas