"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Hidden } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';


export default function InputFileUpload() {  

const [selectedFile, changeSelectedFile] = useState()


// On file select (from the pop up)
const onFileChange = (event) => {
    // Update the state
    changeSelectedFile(event.target.files[0])
}

// On file upload (click the upload button)
const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
        "file",
        selectedFile,
        selectedFile.name
    );
    formData.append("filename", );
    formData.append("course");
    formData.append("section");

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("http://127.0.0.1:5000/api/uploadfile", formData);
};


// File content to be displayed after
// file upload is complete
const fileData = () => {
    if (selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {selectedFile.name}</p>

                    <p>File Type: {selectedFile.type}</p>

                    <p>
                        Last Modified:
                        {selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };
  return (
    <div className="flex justify-evenly">
    <Button
      component="label"
      role={undefined}
      variant="contained"
      
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <input
        type="file"
        onChange={onFileChange}
        hidden
      />
      <fileData/>
    </Button>
    <button className="bg-gray-300" onClick={onFileUpload}>
      Submit
    </button>
    {fileData}
    </div>
  );
}