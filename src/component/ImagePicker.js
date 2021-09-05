import React, { useState } from 'react';
import {Paper, Typography, Input, Button} from "@material-ui/core"
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    input: {
        display: "none"
      },
  }));

export default function ImagePicker(){
    const classes = useStyles();
    const [error, setError] = useState(null)
    const [selectedFile,setSeletedFile] = useState(null);
    const types = ['image/png','image/jpeg'];

    const handleUploadClick = event => {
        
      var file = event.target.files[0];
        if(file && types.includes(file.type)){
        setSeletedFile(file);
        }else{
        setSeletedFile(null);
        setError('Please select Valid File')
        }
      };

      
    return(
      <>
        <Paper elevation={3} >
            <input
              accept="image/*"
            //   className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleUploadClick}
            />
            <Button edge="start"  color="inherit" aria-label="Upload Image"  type='file'>
            <AddPhotoAlternateIcon/>
          </Button>
          <Typography variant="h6" className={classes.title}>
            Upload Image
          </Typography>  
         { console.log('selectedFile', selectedFile)}
          {selectedFile && <div>
            <ProgressBar file={selectedFile} setFile={setSeletedFile}/>
          </div>}
        </Paper>
        <Paper>
          <Typography>
          <Typography variant="h6" className={classes.title}>
            {error}
          </Typography>    
          </Typography>
        </Paper>
        </>

    )
}