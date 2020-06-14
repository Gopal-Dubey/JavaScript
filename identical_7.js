function identical()
{
    var list = ["b", "b", "b"];
    var checkItem = list[0];
    var Same = true;
    for (var i = 0; i < list.length; i++) {
    if (list[i] != checkItem) {
        Same = false;
        break;
    }
    }
    return Same;
}
console.log(identical());