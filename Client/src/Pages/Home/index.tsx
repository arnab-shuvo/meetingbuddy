import { Grid } from '@mui/material';
import React from 'react';
import {HomeWrapper} from './styled'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import 'react-quill/dist/quill.snow.css'
import {useHistory} from 'react-router-dom'

const Home:React.FC = () =>{
    const history = useHistory()

    const goToRecord = () =>{
        history.push('/new-meeting')
    }
    const goToArchive = () =>{
        history.push('/archive')
    }
     
   
    

    return <HomeWrapper container spacing={2}>
        <Grid item md={6}>
            <Card >
                <CardMedia
                    component="img"
                    height="140"
                    image="https://previews.123rf.com/images/katedav/katedav1409/katedav140900264/31993569-%E6%BC%AB%E7%94%BB%E4%BC%9A%E8%AD%B0%E3%81%BE%E3%81%9F%E3%81%AF%E4%BC%9A%E8%AD%B0%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%82%92%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%E3%81%97%E3%81%BE%E3%81%99%E3%80%82.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Record New Meeting
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Are you going to have a new meeting? Lets record and make a summary to people.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={goToRecord}>Start Recording</Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid item md={6}>
            <Card >
                <CardMedia
                    component="img"
                    height="140"
                    image="https://image.shutterstock.com/image-vector/stickman-illustration-featuring-group-teenage-260nw-683203834.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Missed a meeting?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Let's give you some ideas what happened in last coupple of minutes. You will get some summary from it.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={goToArchive}>Let's go</Button>
                </CardActions>
            </Card>
        </Grid>

    </HomeWrapper>
}

export default Home