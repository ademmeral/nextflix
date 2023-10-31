import XFetch from "./xfetch";

const xfetchInstance = XFetch.create({
  baseUrl: 'https://api.themoviedb.org/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.ACCESS_TOKEN
  }
});

export default xfetchInstance;