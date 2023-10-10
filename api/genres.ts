import Paxios from './api';

export async function getCategories(param:string): Promise<Categories | boolean>{
    try{
      const resp = await Paxios.get(`genre/${param}/list?language=en`)
      return await resp.json()
    } catch (err) {
      return false;
    }
  }