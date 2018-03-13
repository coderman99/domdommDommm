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
    // creating wrap div
    let wrapDiv = document.createElement("div");
    document.body.appendChild(wrapDiv);
    // making button a listener
    button.addEventListener("click", btnFunction);
    // btnFunction
    function btnFunction() {
        // create div each time button is pressed
        let div = document.createElement("div");
        div.className = "thisDiv";
        wrapDiv.appendChild(div);
        // creat an id for div each time button is pressed
        let thisDivElements = document.querySelectorAll(".thisDiv");
        for (i = 0; i < thisDivElements.length; i++) {
            thisDivElements[i].id = "" + i;
        }
        // hovers out on div
        div.addEventListener("mouseleave", mouseOut);
        function mouseOut() {
            this.innerText = "";
        }
        // hovers over the div
        div.addEventListener("mouseenter", mouseOver);
        function mouseOver() {
            this.innerText = this.id;
        }
        // color change when div is clicked
        div.addEventListener("click", clicked);
        function clicked() {
            let colors = ["red", "yellow", "green", "purple", "orange"];
            div.style.background = colors[Math.floor(Math.random() * colors.length)];
        }
        // remove and alert when div is clicked
        div.addEventListener("dblclick", dblclicked);
        function dblclicked() {  
            let id = Number(this.id);
            let nextDiv = document.getElementById(id).nextElementSibling;
            let prevDiv = document.getElementById(id).previousElementSibling;
            if(id % 2 === 0){
                if(!nextDiv){
                    alert("there are no more boxes!")
                }else{
                    let removeNext = document.getElementById(this.id).nextElementSibling;
                    wrapDiv.removeChild(removeNext);
                }
            }
            else{
                if(!prevDiv){
                    alert("there are no more boxes!");
                }else{
                    let removePrev = document.getElementById(this.id).previousElementSibling;
                    wrapDiv.removeChild(removePrev);
                }
            }
            
        }
    
    }

});




