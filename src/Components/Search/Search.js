import React from "react";
import { useParams } from "react-router-dom";
import Menufilms from "../Menufilms/Menufilms";

function Search() {

  let idSearch = useParams();

  let [data, setData] = React.useState([]);

  // function search
  React.useEffect(() => {

    async function search(value = "") {

      try {

        await setData([]);

        let api_key = "522a778c9bb94585b521748ae7e4694f",
            language = "en-US";

        let fetchData = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=${language}&query=${value}`),
            dataJson = await fetchData.json(),
            data = dataJson.results;
            console.log(
              dataJson
            );
            if (dataJson.total_pages === 0) {
              setData("nf");
            } else if  (dataJson.total_pages > 0) {
              setData(data);
            }
      } catch (error) {
        setData("er");
      }

    }
    search(idSearch.id);

  }, [idSearch.id]);

  return (
    <>
      <Menufilms data={data} />
    </>
  )
}
export default Search;