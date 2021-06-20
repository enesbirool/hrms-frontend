import React from 'react'
import { NavLink } from 'react-router-dom';
import { Form, Grid, Header, Image, Message, Segment, Button, Label } from 'semantic-ui-react'
import logo from "../../assets/logo.png";
import { withTranslation } from 'react-i18next'



class LoginPage extends React.Component {
  
  render() {
    const {t}=this.props
    return(
      <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src={logo} /> {t("Log-in to your account")}
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder={t("E-mail")} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder={t("Password")}
            type='password'
          />

          <Button style={{webkitBoxShadow: "3px 2px 4px #9E9E9E"}} color='teal' fluid size='large'>
            {t("Login")}
          </Button>
        </Segment>
      </Form>
      <Message>
        {t("New to us?")} <Label as={NavLink} to="/register">{t("Sign Up")}</Label>
      </Message>
    </Grid.Column>
  </Grid>

    )
  
  }
}


const LoginPageWithTranslation=withTranslation()(LoginPage);

export default LoginPageWithTranslation