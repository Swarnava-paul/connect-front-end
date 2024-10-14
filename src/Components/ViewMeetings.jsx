import { useEffect, useState, useRef } from "react";
import { Box, Grid, Text } from "@chakra-ui/react";

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

  console.log(sessions);

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

  return (
    <>
      <Box maxH="100vh" overflowY="auto" pr={4}>
        <Text
          textAlign={"center"}
          fontSize={{
            base: "18px",
            sm: "20px",
            lg: "23px",
          }}
          fontWeight={"500"}
          mt={noSessions ? 20 : 0}
        >
          {noSessions}
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          gap={10}
          py={"50px"}
          placeItems={{
            base: "center",
            lg: "start",
            xl: "center",
          }}
        >
          {sessions.map((item, index) => (
            <Card key={index} data={item}>
              {item}
            </Card>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ViewMeetings;
