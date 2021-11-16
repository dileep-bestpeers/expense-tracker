import React from 'react'
import auth from '../authentication.jpg'

export default function Home() {
    document.title = "Auth - Home"
    return (
        <div>
           <div className="imagebox">
           <img className="HomeImage" src={auth} alt="img"/>
           </div>
        </div>
    )
}
