import React from "react";
import { Link } from 'react-router-dom'


export default function navBar() {
    return (
        <>
            <Link to={'/blue'}>Blue</Link>
            <Link to={'/red'}>Red</Link>
            <Link to={'/green'}>Green</Link>
            <Link to={'/black'}>Black</Link>
            <Link to={'/orange'}>Orange</Link>
            <Link to={'/'}>Home</Link>
        </>

    )
}