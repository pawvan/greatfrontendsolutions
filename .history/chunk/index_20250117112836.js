export default function chunk(array,size=1){
    if(!Array.isArray(array) || size<1){
        return []
    }
    const result  =[]
    let chunk =[]
    for(let i=0;i<array.length;i++){
        chunk.push(array[i])
        if(chunk.size === size || i===array.length-1){
            result.push(chunk)
            chunk=[]
        }
    }
}