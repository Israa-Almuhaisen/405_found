import "./share.css";
import { MdPermMedia,MdLabelImportantOutline,MdOutlineMeetingRoom,MdEmojiEmotions } from 'react-icons/md';
export default function Share() {
  return (
    <form className="create-post">
      <div className="profile-pic">
        <img src="images/profile-8.jpg" alt="" />
      </div>
      <input type="text" placeholder="What's on your mind Chirag?" id="create-post" />
      <input type="submit" value="Post" className="btnm btnm-primary" />
    </form>


    
  );
}