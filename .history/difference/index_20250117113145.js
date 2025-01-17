export default function difference(array,values){
    const setValues  = new Set(values)
    return array.filter((arr)=>!setValues)
}