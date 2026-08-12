import './App.css'
import Blogs from './components/Blogs/Blogs.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {


  return (
    <>
      <Navbar> </Navbar >
      

      <div className="main-container flex">
        <div className="left-container w-[70%]">

<Blogs> </Blogs>
        </div>

        <div className="right-container w-[30%] ">
right-Container
        </div>
      </div>


    </>
  )
}

export default App
