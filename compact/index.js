export default function compact(array){
    const result =[]
    for(let i=0;i<array.length;i++){
    const value  =array[i]
    if(value){
        result.push(value)
    }

    
}
return result
}