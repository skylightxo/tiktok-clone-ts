import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import { videoProps } from "./App";

const VideoSidebar: React.FC<videoProps> = ({
  likes,
  shares,
  messages,
}: videoProps) => {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon
            fontSize="large"
            onClick={(e: React.MouseEvent): void => setLiked(false)}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e: React.MouseEvent): void => setLiked(true)}
          />
        )}
        <p>{liked && likes ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
