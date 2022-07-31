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
    elem.setAttribute("class","red");

}

function selectLast() {
    var elem = document.getElementById("list").lastElementChild;
    elem.setAttribute("class","red");
}

function selectNext() {
    var elem = document.getElementsByClassName("red");
    elem.nextSibling.setAttribute("class", "red");
    console.log(elem);
}

function selectPrevious() {

}