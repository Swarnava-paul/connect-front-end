import { useEffect, useState, useMemo } from "react";
import { Text } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import { displayLoadingModal, hideLoadingModal } from "../App/Slices/MainSlice";
import { useDispatch } from "react-redux";
import Card from "./MeetingCard/Card";

const ViewMeetings = () => {
  const [sessions, setSessions] = useState([]);
  const [noSessions, setNoSessions] = useState("");
  const dispatch = useDispatch();

  const filterUpcomingSessionsOnly = (events) => {
    const filtered = events.filter((i) => {
      const date = new Date(i.sessionInfo.StartDateAndTime);
      const today = new Date();
      if (today < date) {
        return i;
      }
    });
    if (filtered.length == 0) {
      setNoSessions("No Upcoming sessions");
    }

    setSessions(filtered); // set only upcoming session for host
  }; // function for filtering only upcoming sessions
console.log(sessions)



  const fetchUpcomingSessions = async () => {
    dispatch(displayLoadingModal()); // display loading modal

    const token = localStorage.getItem("token");
    const url = import.meta.env.VITE_FETCH_SESSIONS;

    try {
      const response = await fetch(
        url,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {}
      );
      let event = [];
      const { events } = await response.json();
      if (events != null || events != undefined) {
        event = [...events];
      }
      if (event.length > 0) {
        console.log("yes");
        filterUpcomingSessionsOnly(event);
        dispatch(hideLoadingModal());
      } else {
        dispatch(hideLoadingModal());
        setNoSessions("No Upcoming Sessions Found");
      }
    } catch (error) {
      dispatch(hideLoadingModal());
      setNoSessions("Error During Fetching Upcoming Sessions");
    }
  }; // fetch sessions

  useEffect(() => {
    fetchUpcomingSessions();
  }, []);
  console.log(sessions);

  return (
    <Grid
      className="Test"
      pt={10}
      placeItems={"center"}
      minHeight={"100vh"}
      gap={10}
      gridAutoFlow={{ base: "row", md: "column" }}
      style={{
        whiteSpace: "nowrap",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "thin",
      }}
    >
      <Text>{noSessions}</Text>

      {sessions.map((i, index) => (
        <Card key={index} data={i} />
      ))}
    </Grid>
  );
};

export default ViewMeetings;
