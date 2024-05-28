
import './App.css';
import Banner from './Component/Banner';
import Header from './Component/Header';
import Row from './Component/Row';
import request from './Requst';




function App() {

  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup the event listener on component unmount
   
  // }, []);

  return (
   <>
   
   <Header/>
   
   <Banner fetchUrl={request.fetchTopRated}/>
   <Row  title='Trending' fetchurl={request.fetchTrending}/>
   <Row isPoster={true} title='Originals' fetchurl={request.fetchNetflixOriginals}/>
   <Row title='Toprated' fetchurl={request.fetchTopRated}/>
   <Row title='ActionMovies' fetchurl={request.fetchActionMovies}/>
   <Row title='ComedyMovie' fetchurl={request.fetchComedyMovies}/>
   <Row title='HorrorMovies' fetchurl={request.fetchHorrorMovies}/>
   
   
   </>
  );
}

export default App;
