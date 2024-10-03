import { Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux"
const LoadingModal = () => {

  const loadingModalDisplay = useSelector((state)=>state.slice.LoadingModalDisplay)

  return (
    <Flex w='100%' h='100vh' display={loadingModalDisplay} position='absolute' justify='center' align='center'>
    <h1>Loading ...</h1>
    </Flex>
  )
}

export default LoadingModal
