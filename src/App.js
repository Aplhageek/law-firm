import './App.css';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Intro from './Components/Intro/Intro';
import NewsLetter from './Components/NewsLetter/NewsLetter';
import Page1 from './Components/Page1/Page1';
import { SnackbarProvider } from 'notistack'
import Team from './Components/Team/Team';
import CarouselCard from './Components/Carousel/CarouselCard/CarouselCard';
import Carousel from './Components/Carousel/Carousel';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div >
      <SnackbarProvider  anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }} 
        className="snackbar"
        fullWidth={true}
        autoHideDuration = {2000} 
        maxSnack={3}>
      <Page1 />
      <Intro/>
      <ChooseUs />
      <ImageGallery/>
      <Testimonials/>
      <Team />
      <Faq/>
      <NewsLetter/>
      <Footer/>
      </SnackbarProvider>
    </div>
  );
}

export default App;
