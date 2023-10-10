import Paxios from './api';

export async function getCategories(param:string): Promise<Categories | undefined>{
      const resp = await Paxios.get(`genre/${param}/list?language=en`);
      if (!resp.ok) throw new Error('Failed to fetch data');
      return await resp.json()
  }