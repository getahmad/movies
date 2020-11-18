import React, { Component } from "react";
// import GetMovie from "./GetMovie";
import { Spinner } from "reactstrap";
import CardMovie from "./CardMovie";
import "./style.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      data: [],
      isLoading: false,
      isError:false
    };
  }

  clicked = () => {
    console.log("clicked.....");
    this.setState({ isLoading: true });
    fetch(`http://www.omdbapi.com/?apikey=6d1f3e3e&s=${this.state.keyword}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
         console.log(err)
      });
  };

  search = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="container d-flex justify-content-center">
          <input type="text" onChange={this.search} placeholder="carii"></input>
          <button type="submit" onClick={this.clicked}>
            Search
          </button>
          </div>
          <div className="container movie-grid mt-4">

          {this.state.isLoading && (
            <div>
              <Spinner color="primary" />
            </div>
          )}

          {!this.state.isLoading && <CardMovie data={this.state.data} />}  
          
  

          {/* {!this.state.isLoading && (this.state.data.map(data=>{
          return(
            <div key={data.imdbID}>
              <h3>{data.Title}</h3>
            </div>
          )
        }))} */}

          {/* {!this.state.isLoading && <GetMovie data={this.state.data} />} */}
      
        </div>
      </>
    );
  }
}

export default App;
