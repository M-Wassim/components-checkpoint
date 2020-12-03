
import './App.css';
import FullName from './component/Profile/FullName'
import Adress from "./component/Profile/Adress";

import ProfilePhoto from './component/Profile/ProfilPhoto';
function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:'#D9FFFF',width:'220px',margin:'auto'}}>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
      </div>
     
    </div>
  );
}

export default App;
