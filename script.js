var ar = new Array();

while(input!="quit"){
    var input = prompt("What do you want to do ?");
    if(input==="new"){
        var item = prompt("Enter The Item");
        ar.push(item);
    }
    else if(input=="list") {
        console.log(ar);
    }
}
console.log("QUIT");