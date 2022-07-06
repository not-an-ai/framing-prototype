import React, {useEffect, useRef, useState} from 'react';
import { LoadingSpinner } from "./LoadingSpinner";
import "./App.css";
import IframeResizer from "iframe-resizer-react";

function App() {
  const frameUrl = process.env.REACT_APP_CHILD_PAGE_URL;
  useEffect(() => {
    console.log("process.env.REACT_APP_CHILD_PAGE_URL")
    console.log(process.env.REACT_APP_CHILD_PAGE_URL)
  }, [])
  const [showIframe, setShowIframe] = useState<boolean>(false);
  const iframeRef = useRef<any>(null);
  const [messageData, setMessageData] = useState<any>();

  const [iframeReady, setIframeReady] = useState<boolean>(false);
  const onResized = (data: any) => setMessageData(data);
![](C:/Users/SDAUSE~1/AppData/Local/Temp/github-desktop-screenshot-windows.png)
  const onMessage = (data: any) => {
    console.log("onMessage() called");
    console.log(data);
    setMessageData(data);
    if (data.message.event === "config-finished") {
      setIframeReady(false);
      setShowIframe(false);
    }
    if (data.message.event === "config-ready") {
      console.log("iframe ready");
      setIframeReady(true);
      iframeRef.current.resize();
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Parent Page</h1>
        {!showIframe && (
          <button onClick={() => setShowIframe(true)}>Show iframe</button>
        )}
        {showIframe && !iframeReady && <LoadingSpinner />}
        {showIframe && (
          <>
            <IframeResizer
              frameBorder="0"
              //hidden={!iframeReady}
              forwardRef={iframeRef}
              heightCalculationMethod="lowestElement"
              inPageLinks
              //log
              onMessage={onMessage}
              // onResized={onResized}
              src={frameUrl}
              style={{ width: "1px", minWidth: "100%" }}
            />
          </>
        )}
        {messageData && (
          <div>
            <h3>Last Message</h3>
            <div>event: {messageData.message.event}</div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
