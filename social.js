window.onload = () => {
    function closeFunc(){
	document.getElementById("close").style.display="none";
    }
    
    let hold = document.getElementsByClassName("drop-content");
    const content = document.querySelectorAll('.sub-content');
    
    function toggle(val){
	if(hold[val].style.display == 'inline-grid'){
	    hold[val].style.display = 'none';
	}else{
	    hold[val].style.display = 'inline-grid';
	}
    }
    
    let count = hold.length,temp=0;
    
    for(let i = 0; i<content.length;i++){
	content[i].onclick = function(){
	    toggle(i);
	}
	
    }

}


