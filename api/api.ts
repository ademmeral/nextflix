import Paxios from "./paxios/paxios";

export default Paxios.create({
  baseUrl: 'https://api.themoviedb.org/3/',
  headers : {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.ACCESS_TOKEN
  }
})
