import React, {useState} from "react";
import './Register.css';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
from 'mdb-react-ui-kit';

const Register = (prop) => {
    const[user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""

    });
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name] : value
        });
        
    }
    return(
        <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>

            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                <h2 className="fw-bold mb-2 text-center">Sign up</h2>
                {/* <p className="text-white-50 mb-3">Please enter your login and password!</p> */}

                <MDBInput wrapperClass='mb-4 w-100' name = 'name' value={user.name}  label='Name' id='formControlLg' type='text' size="lg"
                    onChange={handleChange}/>
                <MDBInput wrapperClass='mb-4 w-100' name = 'email' value={user.email} label='Email address' id='formControlLg' type='email' size="lg"
                    onChange={handleChange}/>
                <MDBInput wrapperClass='mb-4 w-100' name = 'password' value={user.password} label='Password' id='formControlLg' type='password'  size="lg"
                    onChange={handleChange}/>

                <MDBInput wrapperClass='mb-4 w-100' name = 'cPassqword' value={user.cPassword} label='Confirm Password' id='formControlLg' type='password'  size="lg"
                    onChange={handleChange}/>

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                <MDBBtn size='lg'>
                    Register
                </MDBBtn>

                {/* <hr className="my-4" />

                <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
                    <MDBIcon fab icon="google" className="mx-2"/>
                    Sign in with google
                </MDBBtn>

                <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                    <MDBIcon fab icon="facebook-f" className="mx-2"/>
                    Sign in with facebook
                </MDBBtn> */}

                </MDBCardBody>
            </MDBCard>

            </MDBCol>
        </MDBRow>

    </MDBContainer>
    )
}

export default Register;