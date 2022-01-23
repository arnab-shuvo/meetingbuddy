import { Button, Grid } from '@mui/material';
import React,{useState} from 'react';
import { ReactMic } from 'react-mic';
import {HomeWrapper, RecordTitle} from './styled'
import Fab from '@mui/material/Fab';
import PlayIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import DoneIcon from '@mui/icons-material/Done';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import Loader from '../../Components/Loader';
import Box from '@mui/material/Box';
import {useHistory} from 'react-router-dom'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const NewMeeting:React.FC = () =>{
    const history = useHistory()
    const [record,setRecord] = useState<boolean>(false)
    const [loader,setLoader] = useState<boolean>(false)
    const [convertedText, setConvertedText] = useState('');
    const [summary, setSummary] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title,setTitle] = useState<string>('')
    const [error,setError] = useState<boolean>(false)
  

    const startRecording = () => {
        setRecord(true)
    }
     
     const stopRecording = () => {
        setRecord(false)
    }
    const onStop = async (recordedBlob:any) =>{
        setLoader(true)
        var reader = new FileReader();
        reader.readAsDataURL(recordedBlob.blob);
        reader.onloadend = async  () =>{
            let base64String = reader.result;
            const rawResponse = await fetch('http://localhost:3800/submit-audio', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
                },
                body:JSON.stringify({audio:base64String})
            });
            const response = await rawResponse.json()
            setConvertedText(response.full_text)
            setSummary(response.summary)
            setLoader(false)
            
        }
        
    }

    const updateMeting = async () =>{
        handleOpen()
        
    }
    const submitMeeting = async () =>{
        if(title !== ''){
            try {
                await fetch('http://localhost:3800/submit-meeting', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin':'*'
                    },
                    body:JSON.stringify({title:title,full_text:convertedText,summary: summary})
                });
                history.push('/')
            } catch (error) {
                console.log(error);
                
                alert('Something Went Wrong !!!!')
            }
        }
        else{
            setError(true)
        }
        
    }
    

    return <HomeWrapper container alignItems={'flex-start'}>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <p>Meeting Title</p>
                <TextField onChange={(e)=>{
                    setError(false)
                    setTitle(e.target.value)
                }} error={error} fullWidth label="Title" id="fullWidth" />
                <Button style={{marginTop: '10px'}} size='large' variant='contained' onClick={submitMeeting}>Save</Button> 
            </Box>
        </Modal>
        {loader && <Loader />}
        <Grid container item md={12} justifyContent={'center'}>
            <RecordTitle>Start New Meeting</RecordTitle>
        </Grid>
        <Grid item md={12}>
            <ReactMic
            record={record}
            className="sound-wave"
            onStop={onStop}
            noiseSuppression={true}
            strokeColor="#fff"
            backgroundColor="#065c91" />
        </Grid>
        <Grid container item md={12} justifyContent={'center'}>
            <RecordTitle>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab onClick={startRecording} color="primary" aria-label="add">
                    <PlayIcon />
                </Fab>
                <Fab onClick={stopRecording} color="secondary" aria-label="add">
                    <StopIcon />
                </Fab>
            </Box>
            </RecordTitle>
        </Grid>{
            convertedText &&<>
            <Grid container item md={6} justifyContent={'center'}>
                <h3>Full Speech</h3>
                <ReactQuill
                    theme='snow'
                    value={convertedText}
                    onChange={setConvertedText}
                    style={{minHeight: '300px',width: '100%'}}
                />    
            </Grid>
            <Grid container item md={6} justifyContent={'center'}>
                <h3>Summary</h3>
                <ReactQuill
                    theme='snow'
                    
                    value={summary}
                    onChange={setSummary}
                    style={{minHeight: '300px',width: '100%'}}
                />    
            </Grid>
            <button className='save-meeting-btn' onClick={updateMeting}><DoneIcon fontSize='large'/></button>
            </>
        }
        
        

    </HomeWrapper>
}

export default NewMeeting