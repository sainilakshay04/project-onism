//https://www.youtube.com/watch?v=M4TTeSVX3HI&t=0s
import React, { useEffect, useRef, useState } from "react";
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
function Player(props) {
    const audioEle = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=>{
      if(isPlaying) {
        audioEle.current.play();
      } else {
        audioEle.current.pause();
      }
    })

    const SkipSong = (forwards = true) => {
      if(forwards) {
        props.setCurrentSongIndex(()=>{
          let temp = props.currentSongIndex;
          temp++;

          if(temp>props.songs.length-1) {
            temp=0;
          }

          return temp;
        });
      } else {
        props.setCurrentSongIndex(()=>{
        let temp = props.currentSongIndex;
          temp--;

          if(temp<0 ) {
            temp=props.songs.length-1;
          }
          
          return temp;
        });
      }
    }
    return (
      <div className="player-comp">
        <audio ref={audioEle} src={props.songs[props.currentSongIndex].src}></audio>
        <h4>Now Playing</h4>
        <PlayerDetails song={props.songs[props.currentSongIndex]}/>
        <PlayerControls 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          SkipSong={SkipSong}
        />
    </div>
    );
  }
  
export default Player;