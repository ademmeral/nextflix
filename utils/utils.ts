
export function delay(ms:number){
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function compact(str: string, max:number){
  const text =  str.length > max
    ? str.slice(0, max)
    : str;
  const index = text.split('').findLastIndex(c => c == ' ')
  return `${text.slice(0, index)}...`
}
