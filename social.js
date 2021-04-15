function closeFunc(){
document.getElementById("close").style.display="none";
}

    /*    document.getElementsByClassName("drop-content" + val).classList.toggle("hide");*/
function toggle(val){
    let hold = document.getElementsByClassName("drop-content");
    
    if(hold[val].style.display == 'inline-grid'){
	hold[val].style.display = 'none';
    }else{
	hold[val].style.display = 'inline-grid';
    }
}


