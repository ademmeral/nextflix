import Paxios from "@/api/api"

export function delay(ms:number){
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getMany(param:string){
  try{
    const resp = await Paxios.get(param)
    return await resp.json()
  } catch (err) {
    console.log(err)
  }
}
