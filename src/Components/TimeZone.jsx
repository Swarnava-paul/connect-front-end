import { useSelector} from "react-redux"

const TimeZone = () => {
   
 // in this component users time zone should be visible
 const userTimeZone = useSelector((state)=>state.slice.UserInfo.timeZone)

  return (
   <>
   
   </>
  )
}

export default TimeZone
