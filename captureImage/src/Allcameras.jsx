import React, { useCallback, useEffect, useState } from "react";
import Webcam from "react-webcam";

//getting all the cameras availabe on the device
const Allcamera = () => {
  const [devices, setDevices] = useState([]);

  const handleDevices = useCallback(
    (mediaDevice) => {
      setDevices(mediaDevice.filter(({ kind }) => kind === "videoinput"));
    },
    [setDevices]
  );
  //this will execute as soon as our web application loads
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);
  return (
    <>
      {devices.map((device, key) => (
        <div key={key}>
          <Webcam
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
          />
          <p>{device.label || `Device ${key + 1}`}</p>
        </div>
      ))}
    </>
  );
};

export default Allcamera;
