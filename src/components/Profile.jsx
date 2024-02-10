import React from 'react'
import Gallery from '../App'

const Profile = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.name}</h2>
        <img src={props.src} alt="" />
        <h2>{props.professionTitle}{props.profession}</h2>
        <h2>{props.NumOfAwards}</h2>
        <h2>{props.awardsTitle} {props.awards}</h2>
        <h2>{props.discovered} {props.plutonium}</h2>
        *************************************************************
    </div>
  )
}

export default Profile