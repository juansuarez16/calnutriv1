import axios from "axios";


function  api () {
  const getData = async () => {
    let url = "http://localhost:3000/getGrupoEtnico";

     let res = await axios.get(url);
     return res;
  };

  return getData();
}

export default api;