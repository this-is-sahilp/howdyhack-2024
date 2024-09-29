"use client";

import Image from "next/image";
import Topbar from "./ui/topbar";
import InputFileUpload from "./ui/fileuploadbutton";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { roboto, geistSans, geistMono } from "./layout";
import ActionAreaCard from "./ui/course_card";
// import CourseButton from "./ui/addcourse";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import BasicModal from "./ui/popup";
import { Modal } from "@mui/material";
import { BasicTextFields } from "./ui/test.js";
import { TextField } from "@mui/material";

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], style:"italic" })

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

export default function Home() {
    const [elements, setElements] = useState([<ActionAreaCard key={0} courseName="Course 1" sectionNumber="Section number"/>]);
    const [names, setnames] = useState(["Course 1 title"]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = () => {

    }

    const addElement = () => {
        setnames((prevNames) => [
            ...prevNames,
            "Course " + (prevNames.length + 1)
        ])
        setElements((prevElements) => [
          ...prevElements,
            <ActionAreaCard key={prevElements.length + 1} courseName={"Course " + (prevElements.length + 1)} sectionNumber="Section number"/>,
        ]);
        console.log(names[1]);
      };

      function AddCourseButton() {
        return (
          <Card sx={{ width: 290, height: 235 }}>
            <CardActionArea sx={{ width: 290, height: 235}}>
              <CardContent
                display="flex"
                justify-content="center"
                onClick={addElement}
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

    return (
        <Box>
            <div className = "flex justify-center">
                <Topbar/>
            </div>
            <div className="flex justify-center m-32">
                <p className={`text-white text-5xl ${inter.className}`}>Your Syllabus Simplified, Your Grades Amplified.</p>
            </div>
            <div
                className="flex justify-center color-white gap-14 flex-wrap shrink-0"
            >
                {elements}
                <AddCourseButton/>
            </div>
        </Box>
    );
}
