import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "../../assets/logo.png"

class JobseekerRegister extends React.Component{

  state={
    firstName:null,
    lastName:null,
    identityNumber:null,
    birthDate:null,
    email:null,
    password:null,
    repassword:null
  };

  onChange=event=>{
    const{name,value}=event.target;
    this.setState({
      [name]:value
    })
  }

    render(){
      return(
        <Grid textAlign='center' style={{ height: '82vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logo} /> JobSeeker Register Page
      </Header>
      <Form size='large'>
        <Segment stacked>
        <Form.Input name="firstName" onChange={this.onChange} fluid icon='user' iconPosition='left' placeholder='First Name' />
        <Form.Input name="lastName" onChange={this.onChange} fluid icon='user' iconPosition='left' placeholder='Last Name' />
        <Form.Input name="identityNumber" onChange={this.onChange} fluid icon='user' iconPosition='left' placeholder='İdentity Number' />
        <Form.Input name="birthDate" onChange={this.onChange} fluid icon='user' iconPosition='left' placeholder='Birth Date' />
          <Form.Input name="email" onChange={this.onChange} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input name="password" onChange={this.onChange} fluid icon='lock' iconPosition='left' type="password" placeholder='Password' />
          <Form.Input name="repassword" onChange={this.onChange} fluid icon='lock' iconPosition='left' type="password" placeholder='REPassword' />
          <Button style={{webkitBoxShadow: "3px 2px 4px #9E9E9E"}}  color='teal' fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
      )
    }


}
  

export default JobseekerRegister