import React from 'react';
import './App.css';
import GalaTitle from "./component/GalaTitle";
import ImgPicker from "./component/ImagePicker";
import Gallary from "./component/Gallary";
import ShowImage from "./component/ShowImage"
function App() {
  const [selectedImg, setSelectedImg] = React.useState(null);

  return (
    <div className="App">
      <GalaTitle/>
      <ImgPicker/>
      <Gallary setSelectedImg={setSelectedImg}/>
      { selectedImg && (
        <ShowImage selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
