import SettingList from './SettingList'
import Player from './player/Player'
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function VibeSelect(props) {
  const [songs,setSongs] = 
    useState([
        {title:"Deep Six", category:"lofi", src:"../music/Alix Perez - Deep Six.mp3",artist:"Alix Perez"},
        {title:"second", category:"lofi"},
        {title:"third", category:"lofi"},
        {title:"4th", category:"lofi"},
        {title:"another", category:"lofi"}
      ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
 
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex+1 > songSelection.length-1){
        return 0;
      } else {
        return currentSongIndex+1;
      }
    })
  },[currentSongIndex]);
  let songSelection = (songCategory) => {
    return songs.filter(function(song) {
      return song.category == songCategory;
    });
  }
    return (
      <Router>
        <Routes>
          <Route path="/" 
            element=
              { <section className="settings-container">
                  <div className="settings-label">Pick a Vibe</div>
                  <div className="setting-list">
                    {props.modelData.settingTypes.map(
                      (item, index)=> {
                        return <SettingList key={index} settingItem={item.settingName} urlEnd={item.urlEnd}/>
                      }
                    )}
                  </div>
                </section>
              }>            
        </Route>
        <Route path="/bgmusic" 
           element=
           { <section className="settings-container">
               <div className="settings-label">Select your feel</div>
               <div className="setting-list">
                 {props.modelData.bgMusicTypes.map(
                   (item, index)=> {
                     return <SettingList key={index} settingItem={item.settingName} urlEnd={item.urlEnd}/>
                   }
                 )}
               </div>
             </section>
           }>
        </Route>
        <Route path="/feelgood" 
           element=
           { <section className="settings-container">
               <div className="settings-label">Select your feel</div>
               <div className="setting-list">
                 {props.modelData.feelGoodMusicTypes.map(
                   (item, index)=> {
                     return <SettingList key={index} settingItem={item.settingName} urlEnd={item.urlEnd}/>
                   }
                 )}
               </div>
             </section>
           }>
        </Route>
        <Route path="/bgmusic/lofi" 
           element=
           { <section className="settings-container">
               {/* <Player song={songSelection("lofi")[currentSongIndex]}></Player> */}
               <Player 
                currentSongIndex={currentSongIndex} 
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songSelection("lofi")}
                />
             </section>
           }>
        </Route>
        <Route path="*" 
           element=
           { <section className="settings-container">
               <div className="settings-label">coming soon..!</div>
             </section>
           }>
        </Route>
      </Routes>
    </Router>
    );
  }
  
export default VibeSelect;