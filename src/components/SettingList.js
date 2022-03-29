import {Link} from "react-router-dom"
function SettingList(props) {
    return (
        <div><Link className="settings-item" to={props.urlEnd}>{props.settingItem}</Link></div>
    );
  }
  
export default SettingList;