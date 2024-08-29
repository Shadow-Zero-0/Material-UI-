import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Mypost = () => {
    const theme = useTheme();
    const [Isopan, setIsopan] = useState(false);
    return (
<>
            <Tooltip title="Add post" className="app">
            <Fab onClick={() => {
                setIsopan(true)
            }} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
            </Tooltip>
            <Modal
            open={Isopan}
            onClose={() => {
                setIsopan(false)
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box  className='modle' sx={{ bgcolor: theme.palette.background.default ,width:'399px', maxWidth: {xs:'97%',md:377}}}>
              <Typography sx={{textAlign:'center'}} variant="h6" component="h2">
                Create Post
              </Typography>
             <Stack sx={{mb:2}} flexDirection='row' alignItems= 'center'>
                <Avatar sx={{mr:1}}  src='./1.png'/>
                <Typography variant="h6" >Shadow</Typography>
             </Stack>
             <TextField 
            sx={{width:'100%'}}
          multiline
          rows={3}
          placeholder='What is your mind...'
          variant="standard"
        />
        <Stack flexDirection='row' sx={{mt:2}}>
            <EmojiEmotionsIcon color='secondary'/>
            <ImageIcon color='primary'/>
            <VideoCallIcon color='success'/>
            <PersonAddAlt1Icon color='error'/>
        </Stack>
        <ButtonGroup sx={{mt:2,width:'100%'}} variant="contained" aria-label="Basic button group">
  <Button sx={{flexGrow:1}}>Post</Button>
  <Button><DateRangeIcon/></Button>

</ButtonGroup>
            </Box>
          </Modal>
</>
    );
}

export default Mypost;
