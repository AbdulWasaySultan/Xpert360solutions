function foo(){
    return 'bar'
}

const identity = (x) => {
    return x
}
identity(foo)


const otherfoo = function() {
    return 'bar'
}

const anotherfoo =  () =>{
    return 'bar'
}

identity(foo)

foo === otherfoo

// for objects equality comparision always returns false, unless the object reference 
// the same objects

