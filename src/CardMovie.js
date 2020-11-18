import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
// import "./style.css";

const CardMovie = (props) => {
  return (
    <>
      {/* <div> */}
      {props.data.map((data) => (
        <Card key={data.imdbID}>
          <CardImg top width="100%" height="300px" src={data.Poster} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h6">{data.Title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {data.Year}
            </CardSubtitle>
            <CardText>{data.Type}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      ))}
      {/* </div> */}
    </>
  );
};

export default CardMovie;









// import React from ‘react’
//     const Contacts = ({ contacts }) => {
//       return (
//         <div>
//           <center><h1>Contact List</h1></center>
//           {contacts.map((contact) => (
//             <div class=”card”>
//               <div class=”card-body”>
//                 <h5 class=”card-title”>{contact.name}</h5>
//                 <h6 class=”card-subtitle mb-2 text-muted”>{contact.email}</h6>
//                 <p class=”card-text”> {contact.company.  catchPhrase} </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )
//     };

//     export default Contacts
