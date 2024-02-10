import React from 'react'
import Gallery from '../App'

const Profile = (props) => {
    console.log(props)
  return (
    <div className="card">
        <h1>{props.title}</h1>

        <img src={props.src} alt={props.name} height={props.height} width={props.width} classname={props.className}/>
        <h2 className="name">{props.name}</h2>
        <h2><span>{props.professionTitle}</span>{props.profession}</h2>
        <h2><span>{props.NumOfAwards}</span></h2>
        <h2><span>{props.awardsTitle}</span> {props.awards}</h2>
        <h2><span>{props.discovered}</span>{props.plutonium}</h2>
    </div>
  )
}

export default Profile