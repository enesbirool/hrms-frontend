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
    Label,
} from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'

class HomePage extends React.Component {
    render() {
        const { t } = this.props;
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
                                    <Button as={NavLink} to="/register" positive style={{ marginLeft: "0.5em" }}>{t("Register")}</Button>
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
                    <Grid columns={3} style={{ marginTop: "12em" }}>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment padded>
                                    <Label attached='top'>HTML</Label>
                                    <Image  src='https://dinamikwebtasarim.com/wp-content/uploads/2021/02/html-nedir.png' />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment padded>
                                    <Label attached='bottom'>CSS</Label>
                                    <Image  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsFUniakK8HpooshkkPXGl4FTXYa698PQ7-_GmJcVFnR0MuTClcB-TMx7oBOFLaMXDbE&usqp=CAU' />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment padded>
                                    <Label attached='top right'>Code</Label>
                                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVrZjTo26bl9RoWaHmzQ1iiEZ-iFAu80_Lg&usqp=CAU' />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column>
                                <Segment padded>
                                    <Label attached='top left'>View</Label>
                                    <Image src='data:image/jpeg;base64,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' />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment padded>
                                    <Label attached='bottom left'>User View</Label>
                                    <Image src='data:image/jpeg;base64,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' />
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment padded>
                                    <Label attached='bottom right'>Admin View</Label>
                                    <Image src='https://cdn.dribbble.com/users/2654709/screenshots/14241233/media/29df7fa88e1aa4d96d64e744c2027cc1.png?compress=1&resize=400x300' />
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }

}

const HomePageWithTranslation = withTranslation()(HomePage);
export default HomePageWithTranslation;
