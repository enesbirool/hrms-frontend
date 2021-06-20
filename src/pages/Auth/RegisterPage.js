import React, { useState } from "react";
import { Menu, Grid, Segment, Button, Icon, Label } from 'semantic-ui-react'
import JobseekerRegister from "./JobseekerRegister";
import EmployerRegister from "./EmployerRegister";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
    const [active, setActive] = useState(true);

    return (
        <Grid >
            <Grid.Column width={4} style={{webkitBoxShadow: "4px 3px 4px #9E9E9E"}}>
                <Menu fluid vertical tabular>
                    <Button color='red' onClick={() => setActive(true)} style={{ marginTop: "5em" }}>
                        <Icon name='spy' />
                        Employer Register
                    </Button>
                    {active && <Label as='a' basic color='red' pointing='left'>
                        2,048
                    </Label>}
                    <Button basic color='blue' onClick={() => setActive(false)} style={{ marginTop: "5em"}}>
                        <Icon name='vcard' />
                        JobSeeker Register
                    </Button>
                    {!active&&<Label as='a' basic color='blue' pointing='left'>
                        2,048
                    </Label>}
                    <Button as={NavLink} to="/help" basic color='blue' onClick={() => setActive(false)} style={{ marginTop: "20em"}}>
                        <Icon name='help' />
                        Help
                    </Button>
                </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12} >
                <Segment>
                    {active ? <EmployerRegister/> : <JobseekerRegister />}
                </Segment>
            </Grid.Column>
        </Grid>
    );
}
