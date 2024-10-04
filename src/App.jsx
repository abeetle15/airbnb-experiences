import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import {database} from "./db.js"
import './App.css'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='card-carousel'>
        {database.map(item => {
          return(
            <Card key={item.title}
            title={item.title}
            photoUrl={item.photoUrl}
            stars={item.stars}
            ratings={item.ratings}
            country={item.country}
            price={item.price}
            />
          )
        })}
      </div>
    </>
  )
}

export default App
