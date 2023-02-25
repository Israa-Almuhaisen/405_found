import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "../home/home.css";
import MyGroupCom from "./MyGroupCom";

export default function MyGroup() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <MyGroupCom/>
        <Rightbar/>
      </div>
    </div>
  );
}