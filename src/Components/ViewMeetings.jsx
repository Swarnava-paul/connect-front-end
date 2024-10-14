import { useEffect, useState, useRef } from "react";
import { Flex, Text } from "@chakra-ui/react";
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

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The "2" is for scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <Grid
        minHeight={"100vh"}
        placeItems={"center"}
        gridAutoFlow={{ base: "row", md: "column" }}
        userSelect={"none"}
        justifyContent={{ base: "normal", md: "center" }}
        py={{ base: 10, md: 0 }}
      >
        <Text justifySelf={"center"} fontSize={"24px"} fontWeight={"500"}>
          {noSessions}
        </Text>
        <Flex
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          _active={{ cursor: "grabbing" }}
          flexDir={{ base: "column", md: "row" }}
          width={"min(82%, 100%)"}
          gap={10}
          style={{
            whiteSpace: "nowrap",
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "thin",
          }}
          py={10}
        >
          {sessions.map((i, index) => (
            <Card key={index} data={i} />
          ))}
        </Flex>
      </Grid>
    </>
  );
};

export default ViewMeetings;
