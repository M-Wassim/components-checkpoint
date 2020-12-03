import React from"react";
import Photo from "./profilephoto.png"
const ProfilePhoto = ()=> {
    return(
<div >

<img src={Photo} alt="profilepic" width="150px" style={{borderRadius:'200px'}}/>
</div>

    );
}
export default ProfilePhoto;