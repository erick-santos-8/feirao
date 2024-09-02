import {Box, Button, useColorModeValue} from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/Navbar"
function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreatePage/>}/>
      </Routes>
    </Box>
  )
}

export default App
