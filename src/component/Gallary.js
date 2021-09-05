import React from 'react';
import useFireStore from "../hooks/useFireStore";
import { makeStyles } from '@material-ui/core/styles';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import Modal from '@material-ui/core/Modal';
import { motion } from 'framer-motion';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function Gallary({setSelectedImg}) {
//   const classes = useStyles();
  const {docs} = useFireStore('images');
//   const [open, setOpen] = React.useState(false);
//   const [currentDoc, setCurrentDoc] = React.useState(null);
  
//   const handleClose = () => {
//     setOpen(false);
//   }
//   const openImage = (doc) => {
//       console.log(doc);
//     setCurrentDoc(doc);
//     setOpen(true)
//   }
  return (
    // <div className={classes.root}>
    //   <ImageList rowHeight={160} className={classes.imageList} cols={3}>
    //     {docs.map((doc) => (
    //         // cols={item.cols || 1}
    //       <ImageListItem key={doc.doc_id}>
    //         <img src={doc.url} alt={doc.name || 'Image'} onClick={()=>openImage(doc)}/>
    //       </ImageListItem>
    //     ))}
    //   </ImageList>
    // </div>
    <div className="img-grid">
    {docs && docs.map(doc => (
      <motion.div className="img-wrap" key={doc.id} 
        layout
        whileHover={{ opacity: 1 }}s
        onClick={() => setSelectedImg(doc.url)}
      >
        <motion.img src={doc.url} alt="uploaded pic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.div>
    ))}
  </div>
  );
}
