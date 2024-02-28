document.getElementById("search_input").addEventListener("keyup", function(){
    let filter = this.value.toUpperCase();
    let ul = document.getElementById("itemlist");
    let li = document.getElementsByTagName("li");

    for(let i = 0; i<li.length; i++){

        let txtvalue = li[i].textContent || li[i].innerText;
        if(txtvalue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display ="";
        }else{
            li[i].style.display = "none";
        }
    }
}); 