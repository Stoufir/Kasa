import { RouterProvider } from "react-router-dom";
import router from './router'
import Banner from './Header'

function App() {
  return <RouterProvider router={router}/>
  
}

export default App;