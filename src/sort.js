import React, { useState, useEffect } from 'react';
import './App.css';
import Data1 from './assets/json/Plp.json';
export default  function Sort() {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('name');

 
  useEffect(() => {
    const sortArray = type => {
      const types = {
          topRated :'topRated',
          latest: 'latest',
          featured:'featured_in',
          high:'disPrice',
          low:'disPrice',
          discount:'discount',
      };
      const sortProperty = types[type];
      if(type === "high"){
      const sorted = [...Data1].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
      }
      else{
        const sorted = [...Data1].sort((a, b) => a[sortProperty] - b[sortProperty]);
      setData(sorted);
      }
    };

    sortArray(sortType);
  }, [sortType]); 

  return (
    <div className="App">
        <p>Sort By 
      <select className='refine-view' onChange={(e) => setSortType(e.target.value)}> 
        <option disabled value="">Sort by</option>
        <option value="topRated">Top Rated</option>
        <option value="latest">Latest Arrivals</option>
        <option selected value="featured">Featured </option>
        <option  value="high">Price (highest first)</option>
        <option value="low">Price (lowest first)</option>
        <option value="discount">Discount (descending) </option>
      </select></p>

      {data.map(Data => (
        <div key={Data.id} style={{ margin: '30px' }}>
          <div>{`Name: ${Data.name}`}</div>
          <div>{`Price: ${Data.disPrice}`}</div>
        
        </div>
      ))}
    </div>
  );
}

