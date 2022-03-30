import './App.scss';
import Header from './components/Header'
import VibeSelect from './components/VibeSelect'
function App() {
  let modelData = {
    "settingTypes":[
       {
          "settingName":"Background | Work",
          "urlEnd":"/project-onism/bgmusic"
       },
       {
          "settingName":"Elevated",
          "urlEnd":"/project-onism/elevated"
       }
    ],
    "bgMusicTypes":[
       {
          "settingName":"LoFi",
          "urlEnd":"/project-onism/bgmusic/lofi"
       },
       {
          "settingName":"space",
          "urlEnd":"/project-onism/bgmusic/space"
       }
    ],
    "elevatedMusicTypes":[
      {
         "settingName":"Chill",
         "urlEnd":"/project-onism/elevated/chill"
      },
      {
         "settingName":"Dance Party",
         "urlEnd":"/project-onism/elevated/dance"
      }
   ]
 }

  return (
    <div className="App">
      <Header />
      <VibeSelect modelData={modelData} />
    </div>
  );
}

export default App;
