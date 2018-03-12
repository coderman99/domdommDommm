document.addEventListener("DOMContentLoaded", function () {
    // button element

    let button = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    //   button style

    button.style.margin = "10px 10px 10px 10px";
    button.style.position = "absolute";
    // putting button in document

    button.appendChild(btnText);
    document.body.appendChild(button);
    // making button a listener

    button.addEventListener("click", btnFunction);
    // creating div

    // btnFunction
    function btnFunction() {
        let div = document.createElement("div");
        div.className = "thisDiv";
        document.body.appendChild(div);

        let thisDivElements = document.querySelectorAll(".thisDiv");
        for (i = 0; i < thisDivElements.length; i++) {
            thisDivElements[i].id = "" + i;
        }
        div.addEventListener("mouseleave", mouseOut);
        function mouseOut() {
            this.innerText = "";
        }

        div.addEventListener("mouseenter", mouseOver);
        function mouseOver() {
            this.innerText = this.id;
        }
        div.addEventListener("click", clicked);
        function clicked() {
            let colors = ["red", "yellow", "green", "purple", "orange"];
            div.style.background = colors[Math.floor(Math.random() * colors.length)];
        }
        div.addEventListener("dblclick", dblclicked);
        function dblclicked() {  
            let id = Number(this.id);
            
            if(id % 2 === 0){
            let addDiv = document.getElementById(id).nextElementSibling;
            document.body.removeChild(addDiv);
            } 
            else if(this.id % 2 !== 0){
            let subDiv = document.getElementById(id).previousElementSibling;
            document.body.removeChild(subDiv);
            } 
        }
    }

});




