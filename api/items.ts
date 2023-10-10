import Paxios from './api';

export async function getMany(param: string): Promise<Movies | Series | undefined> {
  const resp = await Paxios.get(`${param}?language=en-US&page=1`);
  if (!resp.ok) throw new Error('Failed to fetch data');
  return await resp.json()
}
export async function getOne(param: string): Promise<SingleItemType | undefined> {

  const resp = await Paxios.get(`${param}?language=en-US`);
  if (!resp.ok) throw new Error('Failed to fetch data');
  return await resp.json()
}
export async function getByCategory(type: string, id: string): Promise<Movies | Series | undefined> {

  const resp = await Paxios.get(`discover/${type}?language=en-US&page=1&with_genres=${id}`)
  if (!resp.ok) throw new Error('Failed to fetch data');
  return await resp.json()
}