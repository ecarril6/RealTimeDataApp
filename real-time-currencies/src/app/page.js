"use client";
import Image from "next/image"
import styles from './page.module.css'
import { useState , useEffect} from 'react'
import { resolve } from 'styled-jsx/css';
import { JetBrains_Mono } from "next/font/google";

export default function Home() {
  //fetch data from web

  const [pokeData , setPokeData] = useState({})
  const [pokemonImage , setPokemonImage ] = useState("")


  useEffect(() => {
    async function getInfo(){
    try{
      // wait until the server responds to you/ await : the await operator is used to wait for a promise and gets the fullfilment value 
      const data  = await fetch('https://pokeapi.com/api/v2/pokemon/ditto')
      const jsonData = await data.json()
      setPokeData(jsonData)
      setPokemonImage(jsonData.sprites.font_default)
    } catch (error) {
      console.log(error)
    }

    }
    getInfo()
  }, [])
  //code
  return(
    <main className={styles.main}>
      <h1>
        Hello World
      </h1>
      {pokemonImage && pokeData ? 
        <>
          <img src={pokemonImage} style={{height:"400px"}}/> 
          <p>{pokeData.name}</p>
        </>  
        :
        <p></p>
      }

    </main>
  )   
}

   
    
