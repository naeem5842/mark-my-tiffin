import React from "react";
import './Home.css';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Home = (prop) => {
    return(
        <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
  
        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>
        <MDBCardTitle>Home Page</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Log Out</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    
    </MDBCol>
      </MDBRow>

    </MDBContainer>
    );
}

export default Home;