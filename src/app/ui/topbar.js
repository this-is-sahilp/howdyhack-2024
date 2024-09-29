import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], style:"italic" })

export default function Topbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        sx = {{
            position:"sticky",
            top:0,
            color: "floralwhite",
            bgcolor: "maroon",
            height: 80
        }}
      >
        <Toolbar>
            <div className="flex absolute mt-4">
                <Image 
                    src = {"/download.webp"}
                    edge = "start"
                    width={175}
                    height={175}
                    sx={{
                        position:"absolute",
                    }}
                />
            </div>
            <Typography variant="h3" component="div" sx = {{flexGrow: 1,textAlign:"center", font: "italic"}}>
                AggieAce
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}