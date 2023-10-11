import Paxios from './api';

export async function getMany(param: string): Promise<Movies | Series | undefined> {
  try {
    const resp = await Paxios.get(`${param}?language=en-US&page=1`) as Response;
    return await resp.json() as Awaited<Promise<Movies | Series>>
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}
export async function getOne(param: string): Promise<SingleItemType | undefined> {

  try {
    const resp = await Paxios.get(`${param}?language=en-US`) as Response;
    return await resp.json() as Awaited<Promise<SingleItemType>>
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}
export async function getByCategory(type: string, id: string): Promise<Movies | Series | undefined> {
  try {
    const resp = await Paxios.get(`discover/${type}?language=en-US&page=1&with_genres=${id}`) as Response
    return await resp.json() as Awaited<Promise<Movies | Series>>
  } catch (err) {
    throw new Error('Failed to fetch data');
  }


}