import React, { useState, useRef } from 'react';
import './App.scss';
import html2canvas from 'html2canvas'; 
import body from './Image/body.png';
import background1 from './Image/background/background1.avif';
import CollapsableMenu from './views/CollapsableMenu';

// Import images dynamically
const topsImages = require.context('./Image/tops', true, /\.(png|jpe?g|svg)$/);  
const bottomImages = require.context('./Image/bottoms', true, /\.(png|jpe?g|svg)$/);
const glassesImages = require.context('./Image/glasses', true, /\.(png|jpe?g|svg)$/);
const mouthsImages = require.context('./Image/mouth', true, /\.(png|jpe?g|svg)$/);
const nosesImages = require.context('./Image/nose', true, /\.(png|jpe?g|svg)$/);
const eyesImages = require.context('./Image/eyes', true, /\.(png|jpe?g|svg)$/);
const shoesImages = require.context('./Image/shoes', true, /\.(png|jpe?g|svg)$/);
const maskImages = require.context('./Image/ski mask', true, /\.(png|jpe?g|svg)$/);

const topsList = topsImages.keys().map(image => topsImages(image)); 
const bottomsList = bottomImages.keys().map(image => bottomImages(image)); 
const glassesList = glassesImages.keys().map(image => glassesImages(image)); 
const mouthsList = mouthsImages.keys().map(image => mouthsImages(image)); 
const nosesList = nosesImages.keys().map(image => nosesImages(image)); 
const shoesList = shoesImages.keys().map(image => shoesImages(image)); 
const maskList = maskImages.keys().map(image => maskImages(image)); 
const eyesList = eyesImages.keys().map(image => eyesImages(image)); 

function Design() { 
  const [selectedClothIndex, setSelectedClothIndex] = useState(null);
  const [selectedPantIndex, setSelectedPantIndex] = useState(null);
  const [selectedGlassesIndex, setSelectedGlassesIndex] = useState(null);
  const [selectedMouthIndex, setSelectedMouthIndex] = useState(null);
  const [selectedNoseIndex, setSelectedNoseIndex] = useState(null);
  const [selectedShoesIndex, setSelectedShoesIndex] = useState(null);
  const [selectedMaskIndex, setSelectedMaskIndex] = useState(null);
  const [selectedEyesIndex, setSelectedEyesIndex] = useState(null);

  const [collapsable, setCollapsableIndexExpand] = useState(null);

  const designRef = useRef(null); // Ref to the design container

  const handleTopsImageSelect = (index) => {
    setSelectedClothIndex(index);
  };

  const handleImageBottomsSelect = (index) => {
    setSelectedPantIndex(index);
  };

  const handleImageGlassesSelect = (index) => {
    setSelectedGlassesIndex(index);
  };

  const handleImageMouthSelect = (index) => {
    setSelectedMouthIndex(index);
  };

  const handleImageNosesSelect = (index) => {
    setSelectedNoseIndex(index);
  };

  const handleImageEyesSelect = (index) => {
    setSelectedEyesIndex(index);
  };  

  const handleImageShoesSelect = (index) => {
    setSelectedShoesIndex(index);
  };  
  
  const handleImageMaskSelect = (index) => {
    setSelectedMaskIndex(index);
  };

  const downloadImage = () => {
    if (designRef.current) {
      html2canvas(designRef.current).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png'); // Correct MIME type
        link.download = 'Jeck.png'; // File name for download
        link.click();
      }).catch(error => {
        console.error('Error generating image:', error);
      });
    }
  };

  const resetDesign = () => {
    setSelectedClothIndex(null);
    setSelectedPantIndex(null);
    setSelectedGlassesIndex(null);
    setSelectedMouthIndex(null);
    setSelectedNoseIndex(null);
    setSelectedShoesIndex(null);
    setSelectedMaskIndex(null);
    setSelectedEyesIndex(null);
  };

  const randomizeDesign = () => {
    setSelectedClothIndex(Math.floor(Math.random() * topsList.length));
    setSelectedPantIndex(Math.floor(Math.random() * bottomsList.length));
    setSelectedGlassesIndex(Math.floor(Math.random() * glassesList.length));
    setSelectedMouthIndex(Math.floor(Math.random() * mouthsList.length));
    setSelectedNoseIndex(Math.floor(Math.random() * nosesList.length));
    setSelectedShoesIndex(Math.floor(Math.random() * shoesList.length));
    setSelectedMaskIndex(Math.floor(Math.random() * maskList.length));
    setSelectedEyesIndex(Math.floor(Math.random() * eyesList.length));
  };

  return (
    <React.Fragment> 
      <div className='container'> 
        <div className='row d-flex justify-content-center'> 
          <div ref={designRef} className='col-sm-12' style={{ width: '500px', height: '900px', position: 'relative' }}>
            <img className='position-absolute' src={body} style={{ width: '500px' }} alt="body" />
            {selectedGlassesIndex !== null && (
              <img className='position-absolute' src={glassesList[selectedGlassesIndex]} style={{ width: '500px' }} alt="glasses"/>
            )}
            {selectedPantIndex !== null && (
              <img className='position-absolute' src={bottomsList[selectedPantIndex]} style={{ width: '500px' }} alt="bottoms"/>
            )}
            {selectedClothIndex !== null && (
              <img className='position-absolute' src={topsList[selectedClothIndex]} style={{ width: '500px' }} alt="tops"/>
            )}
            {selectedMouthIndex !== null && (
              <img className='position-absolute' src={mouthsList[selectedMouthIndex]} style={{ width: '500px' }} alt="mouth"/>
            )}
            {selectedNoseIndex !== null && (
              <img className='position-absolute' src={nosesList[selectedNoseIndex]} style={{ width: '500px' }} alt="nose"/>
            )}
            {selectedMaskIndex !== null && (
              <img className='position-absolute' src={maskList[selectedMaskIndex]} style={{ width: '500px' }} alt="mask"/>
            )}
            {selectedEyesIndex !== null && (
              <img className='position-absolute' src={eyesList[selectedEyesIndex]} style={{ width: '500px' }} alt="eyes"/>
            )}
            {selectedShoesIndex !== null && (
              <img className='position-absolute' src={shoesList[selectedShoesIndex]} style={{ width: '500px' }} alt="shoes"/>
            )}
          </div>
        </div>

        <div className='row d-flex justify-content-center'> 
          <div className='d-flex justify-content-center col-sm-12'>
            <div> 
              <CollapsableMenu images={topsList} onSelectImage={handleTopsImageSelect} isExpand={collapsable === 0} setCollapsableIndexExpand={setCollapsableIndexExpand} index={0} />
            </div>
            <div> 
              <CollapsableMenu images={bottomsList} onSelectImage={handleImageBottomsSelect} isExpand={collapsable === 1} setCollapsableIndexExpand={setCollapsableIndexExpand} index={1} />
            </div>
            <div> 
              <CollapsableMenu images={nosesList} onSelectImage={handleImageNosesSelect} isExpand={collapsable === 2} setCollapsableIndexExpand={setCollapsableIndexExpand} index={2} />
            </div>
            <div>
              <CollapsableMenu images={glassesList} onSelectImage={handleImageGlassesSelect} isExpand={collapsable === 3} setCollapsableIndexExpand={setCollapsableIndexExpand} index={3} />
            </div>
            <div>
              <CollapsableMenu images={mouthsList} onSelectImage={handleImageMouthSelect} isExpand={collapsable === 4} setCollapsableIndexExpand={setCollapsableIndexExpand} index={4}/>
            </div>
            <div>
              <CollapsableMenu images={shoesList} onSelectImage={handleImageShoesSelect} isExpand={collapsable === 5} setCollapsableIndexExpand={setCollapsableIndexExpand} index={5}/>
            </div>
            <div>
              <CollapsableMenu images={maskList} onSelectImage={handleImageMaskSelect} isExpand={collapsable === 6} setCollapsableIndexExpand={setCollapsableIndexExpand} index={6}/>
            </div>
            <div>
              <CollapsableMenu images={eyesList} onSelectImage={handleImageEyesSelect} isExpand={collapsable === 7} setCollapsableIndexExpand={setCollapsableIndexExpand} index={7}/>
            </div>
          </div>
        </div>

        <div className='row justify-content-center'> 
          <div className='col-auto'>
            <button className="btn btn-success" onClick={downloadImage}>Download Image</button>
            <button className="btn btn-warning" onClick={resetDesign}>Reset</button>
            <button className="btn btn-primary" onClick={randomizeDesign}>Randomize</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Design;
