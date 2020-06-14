function getduplicate(array){
    var Array = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(Array.indexOf(array[i]) === -1) {
            Array.push(array[i]);
        }
    }
    return Array;
}

var names = ["1","2","4","90","55"];
var uniqueNames = getduplicate(names);
console.log(uniqueNames);