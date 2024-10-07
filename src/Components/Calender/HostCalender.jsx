import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@chakra-ui/react";

// redux
import { useDispatch, useSelector} from "react-redux";
import { setStoreSelectedDate , displaySlotsModal , setAvailability} from "../../App/Slices/MainSlice";

// Fake data fetching function
const fetchAvailability = async () => {

  let availability = []
  const url = import.meta.env.VITE_GET_ALREADY_EXIST_SLOTS;
  const token = localStorage.getItem("token");
  try {
    const dates = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { availability: responseAvailability } = await dates.json();
    availability = responseAvailability;
  } catch (error) {
    console.error("Error fetching availability:", error);
  }
  return availability;
};

const ServerDay = (props) => {
  const dispatch = useDispatch()
  const { availableDays = [], day, outsideCurrentMonth, ...other } = props;

  // Find the corresponding date in availableDays (from the response)
  const availableData = availableDays.find(
    (d) => d.date === day.date() && d.month === day.month() + 1
  );

  const isAvailable = !!availableData;

  // Disable logic: disable past days, days beyond 6 days from today, and all dates present in the response
  const today = dayjs();
  const sevenDaysFromToday = today.add(6, "day");
  const isDisabled =
    day.isBefore(today, "day") || // Disable past days
    day.isAfter(sevenDaysFromToday, "day") || // Disable dates > 6 days from today
    isAvailable; // Disable all dates in the response

  return (
    <>
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isAvailable ? "SH" : undefined}
      sx={{
        ".MuiBadge-badge": {
          backgroundColor: isAvailable ? "red" : "transparent",
          color: isAvailable ? "white" : "transparent",
        },
      }}
    >
      <PickersDay 
        onClick={() => {
          if (!isAvailable) {
            const date = day.format("YYYY-MM-DD")
            dispatch(setStoreSelectedDate(date));
            dispatch(displaySlotsModal())
            // setting date if any selected 
          }
        }}
        {...other}
        day={day}
        outsideCurrentMonth={outsideCurrentMonth}
        disabled={isDisabled} // Disable based on new logic
      />
    </Badge>
    </>
  );
};

export function MeetingSchedulerCalendar() {
  const [isLoading, setIsLoading] = React.useState(false);
 const availableDays = useSelector((state)=>state.slice.availability)
 const dispatch = useDispatch();

  React.useEffect(() => {
    const loadAvailability = async () => {
      setIsLoading(true);
      try {
        const data = await fetchAvailability();
        dispatch(setAvailability(data))
      } catch (error) {
        console.error("Error fetching availability:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAvailability();
  }, []);

  return (
    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" borderRadius={7}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          loading={isLoading}
          renderLoading={() => <p>Loading...</p>}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            day: {
              availableDays, // Pass available days to the day component
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}
