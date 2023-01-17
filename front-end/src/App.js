import React, { useEffect, useState } from "react"
import axios from "axios";
import './App.css';


const App = () => {
  const [artistList, setArtistList] = useState([])

  useEffect(() => {
    getArtist()
  }, [])

  const getArtist = async () => {
    await axios
      .get("http://localhost:3002/get_artist")
      .then((response) => {
        const data = response.data;
        console.log('data', data)
        setArtistList(data);
      })
      .catch(() => {
      });
    };

 

    return (
      <div className='display'>
        
          <div className="list">{artistList.map((item, index) => {
              return (
                  <card key={index}>
                    <button>E</button>
                    <button>D</button>
                      <li>Name: { item.firstname}</li>
                      <li>Followers: { item.followers}</li>
                      <li>Awards :{item.awards.map(item=> <ul>{item}</ul>)}</li>
                      {/* <li>Awards: { item.mapawards}</li> */}
                      <li>Age: { item.age}</li>
                  </card>
                  
              )
          })}</div>
      </div>
  )
}

export default App;
  