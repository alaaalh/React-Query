import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import HomePage from "./components/Home.page";
import RQsuperHeriosPage from "./components/RQsuperHerios.page";
import SuperHeriosPage from "./components/SuperHerios.page";
import {QueryClientProvider , QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/super-hero'>Traditionl Suber Hero</Link>
            </li>
            <li className="nav-item">
              <Link to='/rq-super-heroies'>RQ Super heroies</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/super-hero" element={<SuperHeriosPage/>} />
        <Route path="/rq-super-heroies" element={<RQsuperHeriosPage/>}/> 
        <Route path="/" exact element={<HomePage/>}/>
      </Routes>  
    </Router>
    <ReactQueryDevtools initalIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;






//install react-query 
//import QueryClientProvider
//wrap application in it
//make instace from queryClient
//add this a client={queryClient}
//now we have access from all method in react query


//to use react-query-devtools
//import it 
//add it before provider
//give insital prop


//every query result is catched for five minutes
//it make react query by default faster
//we use query staltime to reduce number of request
//pulling (outomatic refatching) by refetchInterval