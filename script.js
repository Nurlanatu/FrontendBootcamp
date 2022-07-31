function add(form) {
    if(form.input.value){
        var newItem = document.createElement("li");
        newItem.innerHTML = form.input.value;
        document.getElementById("list").appendChild(newItem);
    }
}

function bgnAdd(form) {
    if(form.input.value){
        var newItem = document.createElement("li");
        newItem.innerHTML = form.input.value;
        var felement = document.getElementById("list").firstChild
        document.getElementById("list").insertBefore(newItem , felement);
    }
}

function remove() {
    var last = document.getElementById("list").lastChild;
    document.getElementById("list").removeChild(last);
}

function selectFirst() {
    var elem = document.getElementById("list").firstElementChild;
    elem.setAttribute("id","red");

}

function selectLast() {
    var elem = document.getElementById("list").lastElementChild;
    elem.setAttribute("id","red");
    console.log(elem);
}

function selectNext() {    
    var demo = document.getElementById("red");
    if(demo === document.getElementById("list").lastElementChild){

        var elem1 = document.getElementById("list").firstElementChild;
        demo.removeAttribute("id","red");
        elem1.setAttribute("id","red");
    }else{
    var elem = document.getElementById("red").nextElementSibling;
    
    demo.removeAttribute("id","red");
    elem.setAttribute("id","red");
        }
}

function selectPrevious() { 
    var demo = document.getElementById("red");
    if(demo === document.getElementById("list").firstElementChild){

        var elem1 = document.getElementById("list").lastElementChild;
        demo.removeAttribute("id","red");
        elem1.setAttribute("id","red");
    }else{
   
    var elem = document.getElementById("red").previousElementSibling;
    demo.removeAttribute("id","red");
    elem.setAttribute("id","red");
        }
}