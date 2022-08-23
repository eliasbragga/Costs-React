import Axios from "axios";

async function getPosts() {
  return Axios.get("https://pokeapi.co/api/v2/pokemon").then(
    (res) => res.data.results
  );
}

export default getPosts;
