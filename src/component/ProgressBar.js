import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import LinearProgress from '@material-ui/core/LinearProgress';
import useStorage from '../hooks/useStorage';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearDeterminate({file,setFile}) {
  const classes = useStyles();
  const {url, progress} = useStorage(file);
  console.log(url,progress);
//   const [progress, setProgress] = React.useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((oldProgress) => {
//         if (oldProgress === 100) {
//           return 0;
//         }
//         const diff = Math.random() * 10;
//         return Math.min(oldProgress + diff, 100);
//       });
//     }, 500);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

  return (
    <div className={classes.root}>
        {progress}
    </div>
  );
}
