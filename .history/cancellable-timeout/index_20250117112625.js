export default function getCancellableTimeout(callback,delay,...args){
    const timerId  = setTimeout(callback,delay,...args)
    return ()=>{
        clearTimeout(timerId)

    }
}