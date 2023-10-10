import Paxios from './api';

export async function getMany(param:string):Promise<Movies | Series | boolean>{
    try{
      const resp = await Paxios.get(`${param}?language=en-US&page=1`)
      return await resp.json()
    } catch (err) {
      return false
    }
  }
  export async function getOne(param:string): Promise<SingleItemType | boolean>{
    try{
      const resp = await Paxios.get(`${param}?language=en-US`)
      return await resp.json()
    } catch (err) {
      return false
    }
  }
  export async function getByCategory(type:string, id:string): Promise<Movies | Series | boolean>{
    try{
      const resp = await Paxios.get(`discover/${type}?language=en-US&page=1&with_genres=${id}`)
      return await resp.json()
    } catch (err) {
      return false;
    }
  }