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
        {title:"All In", category:"lofi", src:"../music/lofi/All In.mp3",artist:"o n i s m"},
        {title:"Your Hand In Mine", category:"lofi", src:"../music/lofi/your hand in mine.mp3", artist:"Squeeda"},
        {title:"Vibn", category:"lofi", src:"../music/lofi/avixn - Vibn.mp3", artist:"avixn"},
        {title:"Daybreak", category:"lofi", src:"../music/lofi/cocabona - Daybreak.mp3", artist:"Cocabona"},
        {title:"In the Sunlight", category:"lofi", src:"../music/lofi/Hz. dv sn - In the Sunlight.mp3", artist:"Hz. dv sn"},
        {title:"Evenings", category:"lofi", src:"../music/lofi/idealism - Evenings.mp3", artist:"Idealism"},
        {title:"Yellow Chords", category:"lofi", src:"../music/lofi/jhfly - yellow chords.mp3", artist:"Jhfly"},
        {title:"Cicadas", category:"lofi", src:"../music/lofi/kupla - Cicadas.mp3", artist:"Kupla"},
        {title:"Caustics", category:"lofi", src:"../music/lofi/leavv - caustics.mp3", artist:"Leavv"},
        {title:"Let Me Hold You", category:"lofi", src:"../music/lofi/lofi.samurai - let me hold you ( Ambient ).mp3", artist:"lofi.samurai"},
        {title:"5:32 PM", category:"lofi", src:"../music/lofi/The Deli - 532 pm.mp3", artist:"The Deli"},
        {title:"Came Along", category:"chill", src:"../music/chill/Amtrac - Came Along.mp3", artist:"Amtrac"}, 
        {title:"Under Your Spell", category:"chill", src:"../music/chill/Desire - Under Your Spell.mp3", artist:"Desire"},   
        {title:"Vibin' Out", category:"chill", src:"../music/chill/FKJ - Vibin' Out.mp3", artist:"FKJ"},
        {title:"Left Alone", category:"chill", src:"../music/chill/Flume - Left Alone feat. Chet Faker.mp3", artist:"Flume, Chet Faker"},  
        {title:"The Diff'rence", category:"chill", src:"../music/chill/J Dilla - The Diff'rence - Donuts.mp3", artist:"J Dilla"},
        {title:"The Sun", category:"chill", src:"../music/chill/MEDLAR - the sun.mp3", artist:"Medlar"},
        {title:"Traffic Cars", category:"chill", src:"../music/chill/Professor Kliq -Traffic Cars.mp3", artist:"Professor Kliq"},
        {title:"In a Sense a Flowers", category:"chill", src:"../music/chill/set in sand - In a Sense a Flowers.mp3", artist:"Set In Sand"},
        {title:"Friends and Lovers", category:"chill", src:"../music/chill/Shigeto - Friends And Lovers.mp3", artist:"Shigeto"},
        {title:"The Way U do", category:"chill", src:"../music/chill/Shlohmo - The Way U Do.mp3", artist:"Shlohmo"},
        {title:"Love Again", category:"chill", src:"../music/chill/Ta-ku - Love Again.mp3", artist:"Ta-Ku"},
        {title:"Beyond Greenpoint", category:"chill", src:"../music/chill/Work Drugs - Beyond Greenpoint.mp3", artist:"Work Drugs"},
        {title:"Lava Lava", category:"dance", src:"../music/dance/Boys Noize - Lava Lava.mp3", artist:"Boys Noize"}, 
        {title:"That Look (Original Mix)", category:"dance", src:"../music/dance/Dosem - That Look (Original Mix).mp3", artist:"Dosem"},
        {title:"Ready For More", category:"dance", src:"../music/dance/Korolova, Two Are, Alar - Ready For More.mp3", artist:"Korolova, Two Are, Alar"},
        {title:"Me & Her", category:"dance", src:"../music/dance/Louis La Roche - Me & Her.mp3", artist:"Louis La Roche"},
        {title:"Icarus", category:"dance", src:"../music/dance/Madeon - Icarus.mp3", artist:"Madeon"},
        {title:"Return to Oz (ARTBAT Remix)", category:"dance", src:"../music/dance/monolink - Return to Oz (ARTBAT Remix).mp3", artist:"monolink. ARTBAT"},
        {title:"Love Tonight (David Guetta Remix)", category:"dance", src:"../music/dance/Shouse - Love Tonight (David Guetta Remix).mp3", artist:"Shouse, David Guetta"},
        {title:"Bird Feeder", category:"dance", src:"../music/dance/Tinlicker - Bird Feeder.mp3", artist:"Tinlicker"},  
        {title:"Space Theme", category:"space", src:"../music/space/65daysofstatic - Space Theme.mp3", artist:"65daysofstatic"},
        {title:"Xtal", category:"space", src:"../music/space/Aphex Twin - Xtal.mp3", artist:"Aphex Twin"},
        {title:"Leaving Winter Behind", category:"space", src:"../music/space/bluetech - Leaving Winter Behind.mp3", artist:"bluetech"},
        {title:"Bleed", category:"space", src:"../music/space/Deadmau5 - Bleed [HD].mp3", artist:"Deadmau5"},  
        {title:"Tell Tales", category:"space", src:"../music/space/Flying lotus - tell tales.mp3", artist:"Flying Lotus"}, 
        {title:"Plateau", category:"space", src:"../music/space/Ghosts of paraguay - plateau.mp3", artist:"Ghosts of paraguay"}, 
        {title:"Inner Space (feat. Hugo Kant)", category:"space", src:"../music/space/Jenova 7 - 'Inner Space (feat. Hugo Kant).mp3", artist:"Jenova 7, Hugo Kant"},  
        {title:"Vanilla Sky", category:"space", src:"../music/space/mitch murder - Vanilla Sky.mp3", artist:"Mitch Murder"}, 
        {title:"Nightcrawler", category:"space", src:"../music/space/Nosaj thing - nightcrawler.mp3", artist:"Nosaj thing"}, 
        {title:"Zodiacal cloud", category:"space", src:"../music/space/raj mahal - zodiacal cloud.mp3", artist:"Raj Mahal"},
        {title:"Silhouettes", category:"space", src:"../music/space/State Azure - silhouettes.mp3", artist:"State Azure"}     
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
      return song.category === songCategory;
    });
  }
    return (
      <Router>
        <Routes>
          <Route path="/project-onism/" 
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
        <Route path="/project-onism/bgmusic" 
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
        <Route path="/project-onism/elevated" 
           element=
           { <section className="settings-container">
               <div className="settings-label">Select your feel</div>
               <div className="setting-list">
                 {props.modelData.elevatedMusicTypes.map(
                   (item, index)=> {
                     return <SettingList key={index} settingItem={item.settingName} urlEnd={item.urlEnd}/>
                   }
                 )}
               </div>
             </section>
           }>
        </Route>
        <Route path="/project-onism/bgmusic/lofi" 
           element=
           { <section className="settings-container">
               <Player 
                currentSongIndex={currentSongIndex} 
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songSelection("lofi")}
                />
             </section>
           }>
        </Route>
        <Route path="/project-onism/bgmusic/space" 
           element=
           { <section className="settings-container">
               <Player 
                currentSongIndex={currentSongIndex} 
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songSelection("space")}
                />
             </section>
           }>
        </Route>
        <Route path="/project-onism/elevated/chill" 
           element=
           { <section className="settings-container">
               <Player 
                currentSongIndex={currentSongIndex} 
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songSelection("chill")}
                />
             </section>
           }>
        </Route>
        <Route path="/project-onism/elevated/dance" 
           element=
           { <section className="settings-container">
               <Player 
                currentSongIndex={currentSongIndex} 
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songSelection("dance")}
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