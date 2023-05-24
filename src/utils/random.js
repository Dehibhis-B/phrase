export const getRandom = (element)=>{
    const ramdomIndex =Math.floor(Math.random()* element.length)
    return element[ramdomIndex]
}
