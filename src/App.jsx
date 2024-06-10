import './App.css'
import Header from './components/Header/Header'
// import Banner from './components/Home/Banner'
import FeaturedProductsSection from './components/Home/FeaturedProductsSection'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='font-bodyFont'>
      <Header/>
      <FeaturedProductsSection/>
      <Footer/>
    </div>
  )
}

export default App
