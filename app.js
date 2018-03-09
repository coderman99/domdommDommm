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
        document.body.appendChild(div);
        div.className = "thisDiv";
        let thisDivElements = document.querySelectorAll(".thisDiv");
        for (i = 0; i < thisDivElements.length; i++) {
            thisDivElements[i].id = "" + i;
        }
        div.addEventListener("mouseover", mouseOver);
        function mouseOver() {

            for (i = 0; i < thisDivElements.length; i++) {
                div.innerHTML = [i];
                div.style.background = "white";
                div.style.color = "black";
                div.style.textAlign = "center";
            }
        }
        div.addEventListener("mouseout", mouseOut);
        function mouseOut() {
            div.style.background = "black";

        }
    }

});



