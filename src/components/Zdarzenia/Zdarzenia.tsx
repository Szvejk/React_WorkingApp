import React, { useState } from 'react'

export const Zdarzenia = () => {

   const [zdj, setCounter] = useState("zdj1");



   const handleSubmit = (e: React.SyntheticEvent,param1:string) => {

    //definiujemy funkcję wewnątrz komponentu
    e.preventDefault(); //zatrzymujemy podstawowe zachowanie
    console.log(e,param1); //SyntheticBaseEvent

    setCounter("zdj2")
  };

  return (
    <form onSubmit={(e)=>handleSubmit(e,"text")}>
      <label htmlFor="surname">Surname</label>
      <input type="text" name="surname" />
      <h1>{counter}</h1>
      <button type="submit">Send form</button>
    </form>
  )
}
