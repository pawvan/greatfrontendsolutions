export default function getCancellableInterval(callback,delay,..args){
    const timerId  = setInterval(callback,delay,...arr)
    return ()=>{
        clear
    }
}