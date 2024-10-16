import * as React from "react";
import dayjs from "dayjs";
import Badge from "@mui/material/Badge";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers";
import { Box } from "@chakra-ui/react";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useDispatch } from "react-redux";
import { setUserSelectedDateOnHostAvailability , displaySlotsModalForBookerDisplay} from "../../App/Slices/MainSlice";

const ServerDay = (props) => {
  const { availableDays = [], day, outsideCurrentMonth, ...other } = props;

  const dispatch = useDispatch();


  // Check if the current day (month and date) is available in the availableDays array
  const isAvailable = availableDays.some(
    (availableDate) =>
      availableDate.month === day.month() + 1 && availableDate.date === day.date()
  );

  // Disable all days not present in availableDays, plus past and future dates logic
  const isDisabled = !isAvailable; // Disable if not available

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isAvailable ? "✔" : undefined}
      sx={{
        ".MuiBadge-badge": {
          backgroundColor: isAvailable ? "green" : "transparent",
          color: isAvailable ? "white" : "transparent",
        },
      }}
    >
      <PickersDay
        {...other}
        day={day}
        onClick={()=>{
          const date = day.format("YYYY-MM-DD");
          dispatch(setUserSelectedDateOnHostAvailability(date))
          dispatch(displaySlotsModalForBookerDisplay());
        }}

        outsideCurrentMonth={outsideCurrentMonth}
        disabled={isDisabled} // Disable dates not in availability
      />
    </Badge>
  );
};

function MeetingSchedulerCalendar({ availability }) {
  const [availableDays, setAvailableDays] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const loadAvailability = async () => {
      setIsLoading(true);
      try {
        const data = availability; // Assuming availability is passed as a prop
        setAvailableDays(data);
      } catch (error) {
        console.error("Error fetching availability:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAvailability();
  }, [availability]);

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

export default MeetingSchedulerCalendar;
