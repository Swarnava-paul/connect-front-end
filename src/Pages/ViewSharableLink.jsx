import { useParams } from "react-router-dom"
import { useEffect} from "react";
import { displayLoadingModal , hideLoadingModal} from "../App/Slices/MainSlice";
import { useDispatch } from "react-redux";

const ViewSharableLink = () => {

  const {id} = useParams();
  // id from url 

  const dispatch = useDispatch();

  const fetchHostAvailability = async () => {
    dispatch(displayLoadingModal());
    try {
      //
    }catch(error) {
      //
    }
    
  }
  // function for fetch host availability details

  const captureBookerTimeZone = () => {
     const bookerTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
     fetchHostAvailability(bookerTimeZone); 
  }
  // function for capturing booker timezone first

  useEffect(captureBookerTimeZone,[]); // for capture booker timezone before browser paints the screen
  
  return (
    <div>
      view
    </div>
  )
}

export default ViewSharableLink
