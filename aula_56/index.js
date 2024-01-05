const objA = {
    chaveA: 'A'
    // _proto_: Object.prototype 
}

const objB = {
        chaveB: 'B'
}

Object.setPrototypeOf(objB, objA); 
console.log(objB.chaveA)