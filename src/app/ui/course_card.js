"use client";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useState } from 'react';
import BasicModal from './popup';
import { Input, Modal, TextField } from '@mui/material';
import { Box } from '@mui/material';
import InputFileUpload from './fileuploadbutton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const textBoxStyle = {
    bgcolor:"white"
}

export default function ActionAreaCard({ courseName, sectionNumber }) {
    const [name, setName] = useState(courseName);
    const [section, setSection] = useState("001");

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    

    <Card sx={{ width: 290, height: 230, font: "Georgia", bgcolor:"maroon"}}>
      <CardActionArea
        sx={{
            width:"100%",
            height:"100%"
        }}
      >
        <CardMedia
          //component="img"
          //eight="140"
          //image="/static/images/cards/contemplative-reptile.jpg"
          //alt="green iguana"
          sx = {{color: 'text.secondary'}}
        />
        <CardContent
            onClick = {handleOpen}
        >

          <Typography gutterBottom variant="h2" component="div" sx={{color:"white", fontFamily:"-moz-initial"}}>
            {name}
          </Typography>
          <Typography variant="body4" sx={{color: 'white', fontFamily:"-moz-initial"}}>
            {`Section number: ${section}`}
          </Typography>
        
                    
        </CardContent>
      </CardActionArea>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          display="flex"
          flexDirection="column"
          gap="30px"
        >
            <Box
                component = "form"
                sx = {{
                    '& > :not(style)': { m: 1, width: '25ch' } 
                }}
                noValidate
                autoComplete='off'
            >
                <TextField variant="standard" label ="Course Title" id="outlined-start-adornment" sx={{
                    border:1,
                    borderColor:"black",
                    m:0
                }}
                    onChange={(event) => {
                    setName(event.target.value);
                }}/>
                <TextField variant="standard" label="Section Number" onChange={(event) => {
                    setSection(event.target.value);
                }}/>
            </Box>
            <InputFileUpload/>
        </Box>
      </Modal>
    </Card>
  );
}