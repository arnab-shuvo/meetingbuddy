import { Grid } from '@mui/material';
import React, { useEffect,useState } from 'react';
import {HomeWrapper} from './styled'
import { useParams } from 'react-router-dom';


const Detail:React.FC = () =>{

    const [meeting,setMeeting] = useState<any>(null)
    const params = useParams<any>()
    console.log(params.id);

    const getDetail  = async(id:any)=>{
        const response = await fetch(`http://localhost:3800/get-meeting/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
                   
        });
        let resp = await response.json()
        setMeeting(resp)
    }
    
    useEffect(()=>{
        getDetail(params.id)
    },[params.id])

    return <HomeWrapper container spacing={2}>
        <Grid item md={12}>
            <h4>Title</h4>
            <h3>{meeting?.title??''}</h3>
        </Grid>
        <Grid item md={12}>
            <h3 >Summary</h3>
            <div dangerouslySetInnerHTML={{__html: `${meeting?.summary??''}`}}></div>

        </Grid>
        <Grid item md={12}>
            <h3>Detail</h3>
            <div dangerouslySetInnerHTML={{__html: `${meeting?.wholeText??''}`}}></div>
        </Grid>

    </HomeWrapper>
}

export default Detail