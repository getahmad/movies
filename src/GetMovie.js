
import React from 'react';

const GetMovie = (props) => { 
    return props.data.map(data=>(
      <div key={data.imdbID} >
        <h3>{data.Title}</h3>
      </div>
    ))
 
}
 
export default GetMovie;