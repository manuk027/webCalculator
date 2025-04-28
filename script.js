function btnClick(val){
    document.getElementById("screen").value+=val;

}

function clearScr(){
    document.getElementById("screen").value="";
}


function result(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    console.log(result);
    document.getElementById("screen").value=result;
}