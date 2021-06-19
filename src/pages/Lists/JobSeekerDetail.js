import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import JobSeekersService from '../../services/JobSeekersService';
import { Image, Grid, Card, Icon, Button, Label, List } from 'semantic-ui-react'

export default function JobSeekerDetail() {

    let { id } = useParams()
    const [jobSeeker, setJobSeeker] = useState([]);

    useEffect(() => {
        let jobseekerService = new JobSeekersService()
        jobseekerService.getByIdDetail(id).then(result => setJobSeeker(result.data.data))
    }, [])

    const [jobSeekers, setJobSeekers] = useState([]);

    useEffect(() => {
        let jobseekerService = new JobSeekersService()
        jobseekerService.getById(id).then(result => setJobSeekers(result.data.data))
    }, [])

    return (
        <div>
            <Grid>
                <Grid.Column width={4}>
                    <Card>
                        <Image src={jobSeeker.pictureUrl} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{jobSeekers.firstName + " " + jobSeekers.lastName}</Card.Header>
                            <Card.Meta>
                                <span className='date'>BirthDate : {jobSeeker.birthDate}</span>
                            </Card.Meta>
                            <Card.Description>
                                {jobSeeker.coverLetter}
                                <div>
                                </div>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                        <Card.Content extra>
                            <Button>Mesaj Gönder</Button>
                            <Button style={{ marginTop: "0.5em" }} primary >Takip Et</Button>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={12} >
                    <List divided selection style={{marginRight:"50em"}}>
                    <List.Item>
                            <Label color='purple' horizontal>
                                Candy
                            </Label>
                            Ice Cream
                        </List.Item>
                        <List.Item>
                            <Label color='purple' horizontal>
                                Candy
                            </Label>
                            Ice Cream
                        </List.Item>
                    </List>
                </Grid.Column>


            </Grid>
        </div>
    )
}
