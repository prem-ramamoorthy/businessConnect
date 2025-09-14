import Header from '../MainPage/Header/Header.jsx'
import Footer from '../MainPage/Footer/Footer.jsx'
import './style.css'
import Hero from './Hero.jsx'
import Main from './Main.jsx'

function Members() {
  return (
    <>
        <Header isMembers = {true} style = {{background :  "rgba(0, 0, 0, 0.07)"}} />   
        <Hero />
        <Main />
        <Footer margin = {"-7"}/>
    </>
  )
}

export default Members