import { useParams } from "react-router-dom"
import { useEffect , useState} from "react";
import { displayLoadingModal , hideLoadingModal, setAvailability} from "../App/Slices/MainSlice";
import { useDispatch } from "react-redux";

const ViewSharableLink = () => {

  const {id} = useParams();
  // id from url 

  const dispatch = useDispatch();
  const [hostInfo,setHostInfo] = useState({name:"",email:"",availability:[]})

  const fetchHostAvailability = async (bookerTimeZone) => {

    const url = `${import.meta.env.VITE_FETCH_HOST_AVAILABILITY_SLOTS}?id=${id}&bookerTimeZone=${bookerTimeZone}`;

    dispatch(displayLoadingModal());
    try {
      //
      const response = await fetch(url);
      const {info:{name,email,convertedAvailability}} = await response.json();
      setHostInfo({
        ...hostInfo,
        name,
        email,
        availability : convertedAvailability
      })
      dispatch(hideLoadingModal());
    }catch(error) {
      //
      console.log(error)
      dispatch(hideLoadingModal());
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
