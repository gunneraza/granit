module.exports = (condition, object) => {
    if(condition) {
        return object.hash.true;
    } 

    return object.hash.false;
}