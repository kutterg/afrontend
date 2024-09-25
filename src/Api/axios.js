import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase function
  // baseURL: "http://127.0.0.1:5001/clone-60794/us-central1/api",
  //deployed version of firebase function

  //deployed version of amazon server on render.com //->//"https://amazon-api-deploy-hxbd.onrender.com"
  baseURL: "https://amazon-api-deploy-hxbd.onrender.com",
});

export {axiosInstance};

//"https://amazon-api-deploy-hxbd.onrender.com"