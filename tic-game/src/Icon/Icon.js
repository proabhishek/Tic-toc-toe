import { FaTimes, FaRegCircle,FaPen } from "react-icons/fa";

const Icon = ({play_icon}) => {
     
         switch(play_icon){
            case "circle":
                 return <FaRegCircle />;
            case "cross":
                    return <FaTimes />;
            default: 
                    return <FaPen />;
         }
     
}
export default Icon;