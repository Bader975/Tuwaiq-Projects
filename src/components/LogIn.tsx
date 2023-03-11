import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link, Navigate } from 'react-router-dom';
import { Button,Text } from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'

import { useNavigate } from 'react-router-dom';

function App() {


  const navigate = useNavigate()
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
          <Link to ={"/"}>
            <div style={{color:"green"}}>
            <i className="fa-solid fa-circle-arrow-left fa-3x "></i>
             </div>
             </Link> 
          

            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">

                
            Sign in </p>

            

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' />
              </div>

          

              
                          <Button 
                mt={35}
              
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'#48BB78'}
                _hover={{ bg: 'green.500' }}
                onClick={()=>{navigate('/show')}}
                >
                  <Text  as='b'>Sign in
</Text>
                
                </Button>
              
              <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: 'green'}}>Don't have an account? <a href="#!"
                      style={{color: 'black'}}>Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use privacy policy</a>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://f.top4top.io/p_2601dcvhp1.png' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;