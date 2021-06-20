import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from "../../assets/logo.png"

class EmployerRegister extends React.Component {
  state={
    companyName:null,
    website:null,
    phoneNumber:null,
    email:null,
    password:null,
    repassword:null
  }

  onChange=event=>{
    const{name,value}=event.target;
    this.setState({
      [name]:value
    })
  }

  render() {

    return (
      <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={logo} /> Employer Register Page
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input onChange={this.onChange} name="companyName" fluid icon='user' iconPosition='left' placeholder='Company Name' />
              <Form.Input onChange={this.onChange} name="website" fluid icon='user' iconPosition='left' placeholder='Website' />
              <Form.Input onChange={this.onChange} name="phoneNumber" fluid icon='user' iconPosition='left' placeholder='Phone Number' />
              <Form.Input onChange={this.onChange} name="email" fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input onChange={this.onChange} name="password" fluid icon='lock' iconPosition='left' type="password" placeholder='Password' />
              <Form.Input onChange={this.onChange} name="repassword" fluid icon='lock' iconPosition='left' type="password" placeholder='REPassword' />
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default EmployerRegister