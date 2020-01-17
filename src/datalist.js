import React,{useState, useEffect} from 'react';
import axios from 'axios';
import "./datalist.css"

function Datalist(){
  const [renewables, setRenewables] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  //Function for fetching data from api and setting up the filer
  const fetchData= async() =>{
    let response= await axios.get("http://localhost:8081/power-plants")
    let responseData = await response.data;
    let filteredData = responseData.filter(item=>{
      return item.type.includes(searchFilter);  //This returns the filtered data.
    })
    setRenewables(filteredData)
  }

// This will filter the table according to the type choosed.
  useEffect(()=>{
        fetchData();
  }, [searchFilter]);

// Another useEffect function for updating the data every 10 seconds.
  useEffect(()=>{
    const timer = setTimeout(() => {
        fetchData();
        console.log('10 seconds babes')
    },10000);  // Updating the data every 10 seconds.
    return () => {
      clearTimeout(timer);    //Timer cleanup function.
    };
  })

  return(
    <div>
      <table>
        <thead>
        <tr>
          <th>Bundesnetzagentur Number</th>
          <th>Company Name</th>
          <th>Name</th>
          <th>Plz</th>
          <th>State</th>
          <th>City</th>
          <th>Address</th>
          <th>Start Date</th>
          <th>Status</th>
          <th>Type<input type="text" value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)} /></th>
          <th>Net nominal power</th>
        </tr>
        </thead>
        <tbody>
        {renewables.map(renewable =>(
          <tr key={renewable.bundesnetzagentur_number}>
            <td>{renewable.bundesnetzagentur_number}</td>
            <td>{renewable.comapny_name}</td>
            <td>{renewable.name}</td>
            <td>{renewable.plz}</td>
            <td>{renewable.city}</td>
            <td>{renewable.address}</td>
              <td>{renewable.state}</td>
            <td>{renewable.start_date}</td>
            <td>{renewable.status}</td>
            <td>{renewable.type}</td>
            <td>{renewable.net_nominal_power_mw}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
  }

export default Datalist
