import React, { useState } from "react";
import "./index.css";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
      {selectedImage && <Modal selectedImage={selectedImage} />}
    </div>
  );
}

export default App;
