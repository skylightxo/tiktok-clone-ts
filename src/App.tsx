import React, { useState, useEffect } from "react";
import Video from "./Video";
import db from "./firebase";
import "./App.css";

export interface videoProps {
  url?: string;
  channel?: string;
  description?: string;
  song?: string;
  likes?: number;
  messages?: number;
  shares?: number;
}

const App: React.FC = () => {
  const [videos, setVideos] = useState<Array<videoProps | any>>([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          (
            {
              url,
              channel,
              description,
              song,
              likes,
              messages,
              shares,
            }: videoProps,
            index: number
          ) => (
            <Video
              key={index}
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
