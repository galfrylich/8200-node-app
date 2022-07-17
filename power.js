exports.power = (exp,base) => {
    let result = 1;
    for(let i=0; i<exp; i++){
        result *=base;
    }
    return result;
}
