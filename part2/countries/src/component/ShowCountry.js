import React  from 'react'
import Country from './Country'

const ShowCountry = ( {touched, error , data }) =>{
    
    if (!touched)
        return null 
    if (error){
        return <h2> invalid request </h2>
    }
    if (data.length === 1 ){
        return <Country show {...data[0]}/>
    }
    if (data.length){
        return data && data.map((country,i) => <Country key={i}  {...country}/> )
    }
    return <h2>too many matches, specify another filter</h2>
   }


export default ShowCountry