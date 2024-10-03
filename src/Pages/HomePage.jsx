import { useEffect} from "react"
import { useLocation } from "react-router-dom"
import { SideBar , MainSection, SharableLink} from "../Components/exports";
import { Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { displayLoginModal , hideLoadingModal 
, displayLoadingModal, authenticationSuccess,setUserInfo
} from "../App/Slices/MainSlice";
import { useSelector } from "react-redux";
import axios from "axios";


const HomePage = () => {
  const getUserInfoUrl = import.meta.env.VITE_Get_User_Info_APi_Url;

  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const dispatch = useDispatch();
  const AuthenticationState = useSelector((state)=>state.slice.AuthenticationState);

  const tokenFromUrl = queryParam.get('token'); // get token from url 

  const checkTokenIsPresentOrNot = () => {
    // this function will check is token is present ot not in localStorage
    // if token is present it will call a function getUserInfo
    // if no token display loginModal
    const token = localStorage.getItem('token')
    if(token){
      getUserInfo(token);
    } else {
      // display login modal
      dispatch(displayLoginModal());
    }
  }

  const getUserInfo = async (token) => {
   // this function will send a get request to an api with token and in response get user info like
   // name , email etc...
   // display a loading untill this request will complete
   // after response get we need to store user name email in a redux state 
   // and redux auth state to true
   // in case in error remove token from localStorage and display loginModal
   dispatch(displayLoadingModal())
   try {

    axios.get(getUserInfoUrl, {
      headers: {
        'Authorization': `Bearer ${token}` // Adding the Authorization header
      }
    }).then(({data})=>{
      const {name,email,sharable_link:sharableLink,timeZone} = data;
      dispatch(hideLoadingModal());
      dispatch(authenticationSuccess());
      dispatch(setUserInfo({name,email,sharableLink,timeZone}))
    }).catch((e)=>{
      dispatch(hideLoadingModal())
      dispatch(displayLoginModal())
    })
  
   }catch(error) {
    dispatch(displayLoginModal())
   }

  }


  useEffect(()=>{
    if(!tokenFromUrl) {
      checkTokenIsPresentOrNot()
    }
  },[tokenFromUrl]) 

  useEffect(()=>{
   if (tokenFromUrl != null || tokenFromUrl != undefined) {
     localStorage.setItem('token',tokenFromUrl)
     getUserInfo(tokenFromUrl);
   }
  },[tokenFromUrl])


  return (
   (AuthenticationState != false ? (
    <Flex gap={10}>
    <SideBar/>
    <MainSection/>
  </Flex> 
   ):null)
  )
}

/* only display this Home page  if redux auth state is true  and also display a loader is loading state will true */

export default HomePage
