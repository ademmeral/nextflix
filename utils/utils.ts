import XFetch from '@/xfetch/api';

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function compact(str: string, max: number) {
  const text = str.length > max
    ? str.slice(0, max)
    : str;
  const index = text.split('').findLastIndex(c => c == ' ')
  return `${text.slice(0, index)}...`
}

/* ======= MOVIES & GENRES ========== */


export async function getCategories(param: string): Promise<Categories | undefined> {
  try {
    const resp = await XFetch.get(`3/genre/${param}/list?language=en`);
    return await resp.json()
  } catch (err) {
    console.log(err)
  }
}

export async function getMany(param: string): Promise<Movies | Series | undefined> {
  try {
    const resp = await XFetch.get(`3/${param}?language=en-US&page=1`) as Response;
    return await resp.json() as Awaited<Promise<Movies | Series>>
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}
export async function getOne(param: string): Promise<SingleItemType | undefined> {

  try {
    const resp = await XFetch.get(`3/${param}?language=en-US`) as Response;
    return await resp.json() as Awaited<Promise<SingleItemType>>
  } catch (err) {
    throw new Error('Failed to fetch data');
  }
}
export async function getByCategory(type: string, id: string): Promise<Movies | Series | undefined> {
  try {
    const resp = await XFetch.get(`3/discover/${type}?language=en-US&page=1&with_genres=${id}`) as Response
    return await resp.json() as Awaited<Promise<Movies | Series>>
  } catch (err) {
    throw new Error('Failed to fetch data');
  }


}