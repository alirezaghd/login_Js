var form = document.getElementById("form");
var married = document.getElementById("Married");
var name_h = document.getElementById("name_h");
var input_h = document.getElementById("input_h");
var txt_childs = document.getElementById("txt_childs");
var txt_btn_p = document.getElementById("btn_p");
var txt_btn_n = document.getElementById("btn_n");
var child = document.getElementById("child");
var darkmode = document.getElementById("darkmode");
var link = document.getElementById("link")

function show_login(){
    form.style.display = "block"


    
}

function married_f(){
        // var new_H = document.createElement("H3")
        // new_H.innerHTML = "نام همسر"
        // var new_input = document.createElement("INPUT");
        // new_input.setAttribute("type", "text");
        // // form.appendChild(new_input);

        // form.insertBefore(new_input,form.childNodes[25]);
        // form.insertBefore(new_H,form.childNodes[24]);
        name_h.style.display = "block";
        input_h.style.display = "block";

}

function single_f(){
    name_h.style.display = "none";
    input_h.style.display = "none";
}
function childs(){
    if(child.checked == true){
        txt_childs.style.display = "inline-block";
        btn_p.style.display = "inline-block";
        btn_n.style.display = "inline-block";

    }

    else if(child.checked == false){
        txt_childs.style.display = "none";
        btn_p.style.display = "none";
        btn_n.style.display = "none";

    }
}
var my_list = document.getElementById("mylist");

function add_childs(){
    

    var new_input = document.createElement("INPUT");
        new_input.setAttribute("type", "text");

        // form.appendChild(new_input);
        //  form.insertBefore(new_input,form.childNodes[38]);
         var bache = document.createElement("LI");
         my_list.appendChild(bache);

         bache.appendChild(new_input);
}

function remove_childs(){
    my_list.removeChild(my_list.childNodes[0]);
}


function dark(){
    if(darkmode.checked == true){
        link.href = "style_dark.css"


    }

    else if(darkmode.checked == false){
        link.href = "style.css"

    }
}