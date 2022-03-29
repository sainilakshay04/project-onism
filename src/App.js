import './App.scss';
import Header from './components/Header'
import VibeSelect from './components/VibeSelect'
function App() {
  let modelData = {
    "settingTypes":[
       {
          "settingName":"Background | Work",
          "urlEnd":"/bgmusic"
       },
       {
          "settingName":"Feel Good",
          "urlEnd":"/feelgood"
       }
    ],
    "bgMusicTypes":[
       {
          "settingName":"LoFi",
          "urlEnd":"/bgmusic/lofi"
       },
       {
          "settingName":"Ambient",
          "urlEnd":"/bgmusic/ambient"
       }
    ],
    "feelGoodMusicTypes":[
      {
         "settingName":"Chill",
         "urlEnd":"/feelgood/chill"
      },
      {
         "settingName":"Rave",
         "urlEnd":"/feelgood/rave"
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
