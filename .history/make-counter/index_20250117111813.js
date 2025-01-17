export default function makeCounter(intialValue=0){
    let count  =intialValue-1
    return ()=>{
        count
    }
}