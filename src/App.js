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
          "settingName":"Feel Good",
          "urlEnd":"/project-onism/feelgood"
       }
    ],
    "bgMusicTypes":[
       {
          "settingName":"LoFi",
          "urlEnd":"/project-onism/bgmusic/lofi"
       },
       {
          "settingName":"Ambient",
          "urlEnd":"/project-onism/bgmusic/ambient"
       }
    ],
    "feelGoodMusicTypes":[
      {
         "settingName":"Chill",
         "urlEnd":"/project-onism/feelgood/chill"
      },
      {
         "settingName":"Rave",
         "urlEnd":"/project-onism/feelgood/rave"
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
