import { Grid } from '@mui/material';
import React,{useState,useEffect, useRef} from 'react';
import {HomeWrapper} from './styled'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import dayjs from 'dayjs'
import TableRow from '@mui/material/TableRow';

import Fab from '@mui/material/Fab';
import {useHistory} from 'react-router-dom'
import PreviewIcon from '@mui/icons-material/Preview';


const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 100 },
    
  ];


const Archive:React.FC = () =>{
    const history = useHistory()
    const [data,setData] = useState<any[]>([])

    const getList  = async()=>{
        const response = await fetch('http://localhost:3800/all-meeting', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            },
                   
        });
        let resp = await response.json()
        setData(resp.reverse())
    }

    useEffect( ()=>{
        getList()
    },[])

    function parseISOString(s:any) {
        return dayjs(s).format('YYYY-MM-DD HH:mm') ;
        
      }
    const goToDetail = (id:any) =>{
        history.push(`detail/${id}`)
    }
    

    return <HomeWrapper container spacing={2}>
        <Grid item md={12}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                        <TableCell >
                        Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((meeting:any,index:number)=>{
                            let date = parseISOString( meeting.date)
                            return  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                <TableCell >
                                {   meeting.title ?? 'N/A'}
                                </TableCell>
                                <TableCell >
                                    {date}
                                </TableCell>
                                <TableCell >
                                <Fab onClick={()=>goToDetail(meeting._id)} color="primary" aria-label="add">
                                    <PreviewIcon />
                                </Fab>
                                </TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
                </Table>
            </TableContainer>
           
        </Paper>
        </Grid>

    </HomeWrapper>
}

export default Archive