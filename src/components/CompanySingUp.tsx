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
import { Link , useNavigate} from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'

function CompanySingUp() {
  const[name, setName] = React.useState('');
  const[email, setEmail] = React.useState('');
  const[password, setPassword] = React.useState('');
  const[retypePassword, setRetypePassword] = React.useState('');
  const[company, setCompany] = React.useState('');
  const[cheked, setChecked] = React.useState(true);


  const[error, setError] = React.useState(false)
  
  const navigate = useNavigate()
 
   function register(e:any){
 
    if(name.length == 0 || email.length == 0 || password.length == 0 || retypePassword.length == 0 || !cheked ||company.length == 0 ){
      setError(true);
      setChecked(false)
        
      }
      else{
         
        navigate('/companies')
        localStorage.setItem('name',name);
      }

    }
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

                
                Sign Up As Company </p>

              <div className="d-flex flex-row align-items-center mb-1 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={e => {setName(e.target.value)}}/>
              </div>
              {error&&name.length<=0?<p  className= 'ms-4 text-danger fs-6'>Name field cannot be empty</p>:''}

              <div className="d-flex flex-row align-items-center mb-2 ">
                <MDBIcon fas icon="building me-3" size='lg'/>
                <MDBInput label='Your Company' id='form1' type='text' className='w-100' onChange={e => {setCompany(e.target.value)}} />
              </div>
              {error&&company.length<=0?<p  className= 'ms-4 text-danger fs-6'>Company field cannot be empty</p>:''}


              <div className="d-flex flex-row align-items-center mb-2">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='Your Email' id='form2' type='email' onChange={e => {setEmail(e.target.value)}}/>
              </div>
              {error&&email.length<=0?<p  className= 'ms-4 text-danger fs-6 '>Email field cannot be empty</p>:''}
              {error&&!email.includes('@')?<p  className= 'ms-4 text-danger fs-6 mb-2 '>Email Should include @</p>:''}


              <div className="d-flex flex-row align-items-center mb-2 ">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' onChange={e => {setPassword(e.target.value)}}  />
              </div>
              {error&&password.length<=0?<p  className= 'ms-4 text-danger fs-6 mb-2  '>Password field cannot be empty</p>:''}
              {error&&password.length>=1 && password.length<=5?<p  className= 'ms-4 text-danger fs-6 mb-2  '>Password is too short</p>:''}


              <div className="d-flex flex-row align-items-center mb-2">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password' onChange={e => {setRetypePassword(e.target.value)}}/>
              </div>
              {error&&password.length<=0?<p  className= 'ms-4 text-danger fs-6 mb-2  '>Password field cannot be empty</p>:''}
              {error&&password!== retypePassword?<p  className= 'ms-4 text-danger fs-6 mb-2  '>Passwords are not the same</p>:''}


              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I Agree All statements in Terms of service'
                 onClick={e => {setChecked(true)}} />
                {!cheked?<p  className= 'ms-4 text-danger fs-6 mb-2  '> You should Agree All statements </p>:cheked}


              </div>
               
               <Button 
               
                onClick={register}
              
                 rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'#48BB78'}
                _hover={{ bg: 'green.500' }}>
                  <Text  as='b'>Sign up</Text>
                
                </Button>
               
             </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://j.top4top.io/p_2600burl71.png' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default CompanySingUp;