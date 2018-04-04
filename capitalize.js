function capitalize(text) {
    var x = "";
    for ( let l in text){
        if(l == 0 ){
            x += text[l].toUpperCase();
        } else {
        x += text[l].toLowerCase();
    }
}
    return x;
}
module.exports = capitalize;