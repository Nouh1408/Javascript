var index=0;

function changecolors(){
    var colour = ["Red","blue", "green","yellow", "purple","orange","Pink","black"];
    document.getElementsByTagName("body")[0].style.background = colour[index++];

    if(index > colour.length -1){
        index =0;
    }
}