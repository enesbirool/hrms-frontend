import React from 'react'
import { Button, Comment, Form, Grid } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'

class HelpPage extends React.Component {

    render(){
        const {t}=this.props;
        return(
            <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Comment.Group>
                    <Comment>
                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/steve.jpg' />
                        <Comment.Content>
                            <Comment.Author as='a'>mXBozkurt</Comment.Author>
                            <Comment.Metadata>
                                <div>{t("Now")}</div>
                            </Comment.Metadata>
                            <Comment.Text>{t("Hello, How Can We Help You?")}</Comment.Text>
                            <Comment.Actions>
                                <Comment.Action active>{t("Waiting")}...</Comment.Action>
                            </Comment.Actions>
                            <Form reply>
                                <Form.TextArea />
                                <Button
                                    content={t("Send Message")}
                                    labelPosition='left'
                                    icon='edit'
                                    primary
                                />
                            </Form>
                        </Comment.Content>
                    </Comment>
                </Comment.Group>
            </Grid.Column>
        </Grid> 
        )
    }
    

}
const HelpPageWithTranslation = withTranslation()(HelpPage);
export default HelpPageWithTranslation;