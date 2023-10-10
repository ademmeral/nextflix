import Paxios_ from "./paxios/paxios";

export default Paxios_.create({
  baseUrl: 'https://api.themoviedb.org/3/',
  headers : {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.ACCESS_TOKEN
  }
})

