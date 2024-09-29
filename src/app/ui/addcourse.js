"use client";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function ActionAreaCard() {
  return (
    <Card sx={{ width: 290, height: 235 }}>
      <CardActionArea sx={{ width: 290, height: 235}}>
        <CardContent
          display="flex"
          justify-content="center"
          onClick={event => {
            console.log("hello world");
          }}
        >
          <div>
            <div className="flex place-content-center">
              Add Course
            </div>    
            <div className="flex place-content-center">
              <AddIcon
                  sx={{
                      width:50,
                      height:50
                  }}
              />
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}