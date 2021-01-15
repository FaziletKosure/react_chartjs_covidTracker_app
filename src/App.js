import React,{useEffect,useState} from 'react'

import {Cards,Chart,CountryPicker} from './components'
import {fetchData} from './api'
import styles from './App.module.css'
import image from './images/image.jpg';

const App=()=>{
    const [data, setData] = useState({});
    const [country, setCountry] = useState('');
   
    useEffect(()=>{
        async function fetchedData() {
          const dataFetch = await fetchData()
          console.log(dataFetch);
          setData(dataFetch)  
        }
        fetchedData();
    },[])
    const handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        setCountry(country)
        setData(data)
      }
    return(
        <div className={styles.container}> 
             <img className={styles.image} src={image} alt="COVID-19" />
             <Cards data={data}/>
            <CountryPicker   handleCountryChange={handleCountryChange}/>
            <Chart  data={data} country={country}/>
                   
        </div> 
    )
}

export default App