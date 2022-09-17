import React, { useState } from 'react'

const Counterapp = () => {
    const [counter, setCounter] = useState(0);


    //Función que se encarga de incrementar
    const incremetnCounter = () => {
        setCounter(counter+1);
    }


  return (
    <div>
        <h1>Clicks {counter}</h1>
        <button onClick={incremetnCounter}>Incrementar</button>
    </div>
  )
}

export { Counterapp };