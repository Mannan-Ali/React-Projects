import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

//this are the contrains for main camera
const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = () => {
  const webCameRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = useCallback(async () => {
    const imageSrc = webCameRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webCameRef]);

  const onUserMedia = (e)=>{
    console.log(e);
    
  }
  return(
   <>
   <Webcam
   ref={webCameRef}
   audio={false}
   screenshotFormat="image/png"
   videoConstraints = {videoConstraints}
   onUserMedia={onUserMedia}
   mirrored = {true}
   />
   <button onClick={capturePhoto}>Capture</button>
   <button onClick={()=> setUrl(null) }>Refresh</button>

   {url && (
    <div>
        <img src={url} alt="ScreentShot" /> 
    </div>
   )}
  </>
  )

};
export default Camera;
