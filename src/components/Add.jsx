import {Box, Fab, Modal, Tooltip, styled,Typography,Avatar,TextField,Stack, Button } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react'
import { Image, PersonAdd, VideoCameraBackOutlined } from '@mui/icons-material';

const Add = () => {
  const [open, setopen] = useState("")

  const handleClose=()=>{
    setopen(false)
  }
  const handleOpen=()=>{
    setopen(true)
  }
  
  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems:"center"
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginBottom:"10px"
  });
  
  return (
      <>
    <Tooltip onClick={handleOpen} title="Add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",md:30}}}>
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  </Tooltip>

  <StyledModal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  >
  <Box width={400} height={300}  borderRadius={5} p={5} bgcolor={"background.default"} color={"text.primary"} >
   <Typography variant='h6' color={"gray"} textAlign="center">
     Create Post
   </Typography>

   <UserBox>
        <Avatar sx={{width:"30px",height:"30px"}}   src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <Typography variant="span" fontWeight={500}>
          John Wick
        </Typography>
        </UserBox>
        <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />

       <Stack direction="row" gap={3} sx={{cursor: 'default',
    '&:hover': {
      cursor: 'pointer'
    },}} mt={2} mb={3}>
          <EmojiEmotionsIcon color='primary'/>
          <Image color='secondary'/>
          <VideoCameraBackOutlined color='success'/>
          <PersonAdd color='warning'/>
       </Stack>
       <Button variant="contained" size="large" fullWidth={true}>
          Post
        </Button>
  </Box>
</StyledModal>

      </>
  )
}

export default Add