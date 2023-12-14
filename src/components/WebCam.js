import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const CustomWebcam = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [facingMode, setFacingMode] = useState('environment'); // Default to front camera


    const switchCamera = () => {
        setFacingMode(prevState => (prevState === 'user' ? 'environment' : 'user'));
      };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      }, [webcamRef]);

      const retake = () => {
        setImgSrc(null);
      };
    
  return (
   <div className="container">
    <h1>React Webcam</h1>
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={600} width={600} ref={webcamRef} videoConstraints={{ facingMode }} />
      )}
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
            <>
            
            <button onClick={capture}>Capture photo</button>
        <button onClick={switchCamera}>Switch Camera</button>
            </>
        
        )}
      </div>
    </div>
  );
};

export default CustomWebcam;