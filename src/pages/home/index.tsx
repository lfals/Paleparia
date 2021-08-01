import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>{
    return (
        <>
        <h1>Home</h1>
        <Link to="/store" >Loja</Link>
        </>
    )
}

export default Home