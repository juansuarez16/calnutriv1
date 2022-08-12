import axios from "axios";


function  api (url) {
  const getData = async () => {    

     let res = await axios.get(url);
     return res;
  };

  return getData();
}

export default api;
