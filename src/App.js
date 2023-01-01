import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Menufilms from "./Components/Menufilms/Menufilms";
import Menu from "./Components/Menu/Menu";
import Movies from "./Components/Movies/Movies";
import NoFound from "./Components/NoFound/NoFound";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";

function App() {

  // data films
  let [data, setData] = React.useState([]);

  // switch pages
  let [pages, setPages] = React.useState(+sessionStorage.getItem("page"));

    // function fetch films
    React.useEffect(() => {
      (async function () {

        try {
          
          await setData([]);

          let api_key = "522a778c9bb94585b521748ae7e4694f",
          language = "en-US",
          page = pages;

          let fetchData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=${language}&page=${page}`),
            dataJson = await fetchData.json(),
            data = dataJson.results;
            await setData(data);

        } catch (error) {
          setData("er");
        }
      }())
    }, [pages])

    // function switch pages
    function switchPages(num) {
      setPages(num);
    }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
          element={
            <>
              <Navbar />
              <Menu switchPages={switchPages} />
              <Menufilms data={data} />
              <Menu switchPages={switchPages} />
              <Footer />
            </>
          }
        />
        <Route path={`/movie/:id`}
        element={
          <>
            <Navbar />
            <Movies />
            <Footer />
          </>
        }
        />
        <Route path="/search/:id"
          element={
            <>
              <Navbar />
              <Search />
              <Footer />
            </>
          } />
        <Route path="*" 
          element={
            <>
              <Navbar />
              <NoFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;