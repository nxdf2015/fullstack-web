import React, { useState } from "react";
import axios from "axios";
import ShowCountry from "./component/ShowCountry";

const uri = "https://restcountries.eu/rest/v2/name/";
 
function App() {
  const [country, setCountry] = useState("");
   
  const [error , setError ] = useState(false)
  const [data, setData] = useState([]);
  const [touched , setTouched ] =useState(false)
  const searchCountry = ({ target: { value } }) => {
    setCountry(value);
    
    if (!value){
      setTouched(false)
    }
    axios({
      method: "get",
      url: uri+value,
      
    }).then(({ data }) => {
      setError(false)
      setTouched(true)
      setData(data.length < 10 ? data : []);
    })
    .catch(error => setError(true))
  };

  return (<div>

    find countries
    <input  value={country} onChange={searchCountry} type="text" />
    <ShowCountry touched={touched} error={error} data={data}/>
  </div>
  );
}



export default App;
