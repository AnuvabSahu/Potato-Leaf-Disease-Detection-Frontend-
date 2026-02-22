import { Outlet } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


const App = () => {

  return (
    <div className="bg-primary-content">
      <Header />
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default App;
