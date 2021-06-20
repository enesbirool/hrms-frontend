import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Container,
    Divider,
    Button,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Card,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'

class HomePage extends React.Component {
    render(){
        const { t }=this.props;
        return (
            <div>
                <Container style={{ marginTop: "12em" }}>
                    <Item.Group >
                        <Item>
                            <Item.Image size='large' src='https://www.betterbuys.com/wp-content/uploads/2019/08/hrms-hero-intro.png' />
    
                            <Item.Content>
                                <Item.Header >{t("Human Resource Management System")}</Item.Header>
                                <Item.Meta style={{ marginTop: "1em" }}></Item.Meta>
                                <Item.Description style={{ marginTop: "2em" }}>
                                    {t("“If there's a facility, when you're starting to bring it to life. This doesn't require you to think right away. One small step each day will start the movement.”")}
                                </Item.Description>
                                <Item.Extra style={{ marginTop: "2em" }}>{t("Don't waste your time, Join us and find Work/Company Harmony!!!")}</Item.Extra>
                                <Menu.Item>
                                    <Button as={NavLink} to="/login" style={{ marginTop: "3em" }}>{t("Login")}</Button>
                                    <Button as={NavLink} to="/register" positive style={{ marginLeft: "0.5em" }}>Register</Button>
                                </Menu.Item>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    <Segment style={{ marginTop: "12em" }}>
                        <Grid columns={2} relaxed='very' >
                            <Grid.Column>
                                <p>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </p>
                                <p>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </p>
                                <p>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </p>
                                <p>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </p>
                                <p>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </p>
                                <p>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </p>
                                <p>
                                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                </p>
                            </Grid.Column>
                        </Grid>
    
                        <Divider vertical>And</Divider>
                    </Segment>
                </Container>
            </div>
        )
    }
    
}

const HomePageWithTranslation=withTranslation()(HomePage);
export default HomePageWithTranslation;
