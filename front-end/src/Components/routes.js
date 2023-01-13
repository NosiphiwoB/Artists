import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import Display from './Display';
import { useEffect, useState } from 'react';

const Main = () => {

   const [card, setCard] = useState([]);
   useEffect(() => {
    getDetails();
   }, []);



   const handleSubmit = async (e) => {
   e.preventDefault();
  {
    try{
      const saveDetails = await axios.post(
        "http://localhost:3002/save_details"
      );
      getDetails();
      return saveDetails;
    } catch (error) {
      console.log("error", error);
    }
  }
    
  };
  const getDetails = async () => {
    await axios
      .get("http://localhost:3002/get_details")
      .then((response) => {
        const data = response.data;
        setCard(data);
      })
      .catch(() => {
      });
    };

    // const deleteArtist = async (id) => {
    //   console.log('id', id)
    //   let res = await axios.delete(`http://localhost:3002/delete_artist/${id}`);
    //   getDetails();
    //   return res.data
    //  }


    // const increment = async(id, data) => {

    //   let value = Number(data);
    //   value++;
    //   let res = await axios.put(`http://localhost:3005/increment/${id}`, {members: value.toString()}).then(res=>{
    //     getDetails();
    //   }).catch(error=> console.log(error));
      
    //   return res

    // };


    // const decrement = async(id, data) => {

    //   let value = Number(data);
    //   value--;
    //   let res = await axios.put(`http://localhost:3005/decrement/${id}`, {members: value.toString()}).then(res=>{
    //     getDetails();
    //   }).catch(error=> console.log(error));
      
    //   return res

    // };

  

  return (

    <div>
      <Routes>
        <Route path="/" exact />
        <Route path="/display" element={<Display card={card} getDetails={getDetails}/>} />
      </Routes>
    </div>

  );
}

export default Main;
