import { useEffect , useState , useMemo} from "react"
import { Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { displayLoadingModal , hideLoadingModal } from "../App/Slices/MainSlice";
import { useDispatch } from "react-redux";


const ViewMeetings = () => {

  const [sessions,setSessions] = useState([]);
  const [noSessions,setNoSessions] = useState('');
  const dispatch = useDispatch();

  const filterUpcomingSessionsOnly = (events) => {
    const filtered = events.filter((i)=>{
      const date = new Date(i.sessionInfo.StartDateAndTime);
      const  today = new Date();
      if (today < date) {
        return i;
      }
    })
    if(filtered.length == 0) {
      setNoSessions('No Upcoming sessions')
    }
    setSessions(filtered); // set only upcoming session for host 
  } // function for filtering only upcoming sessions 
  console.log(sessions)

  const fetchUpcomingSessions = async() => {
    dispatch(displayLoadingModal()); // display loading modal

    const token = localStorage.getItem('token');
    const url = import.meta.env.VITE_FETCH_SESSIONS;

    try {
      const response = await fetch(url,{
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      },{});
      let event = []
      const {events} = await response.json();
      if (events != null || events != undefined) {
        event = [...events]
      }
      if (event.length > 0) {
         console.log('yes')
         filterUpcomingSessionsOnly(event);
         dispatch(hideLoadingModal());
      }else {
        dispatch(hideLoadingModal());
        setNoSessions('No Upcoming Sessions Found');

      }
    }catch(error) {
      dispatch(hideLoadingModal());
      setNoSessions('Error During Fetching Upcoming Sessions')
    }
    
  }; // fetch sessions 

  useEffect(()=>{fetchUpcomingSessions()},[]);

  return (
    <Grid mt={20} border='1px solid red' placeItems='center'>
     <Text>{noSessions}</Text> {/** this text is important */}
      {
         sessions.map((i,index)=>(
          <p key={index}>{i.bookerInfo.bookerName}</p> // example
        ))
      }
    </Grid>
  )
}

export default ViewMeetings
