/* Fonctionnalité 1*/
document.querySelector("footer").addEventListener("click", function(){
    console.log("click")
 })

/* Fonctionnalité 2 */
document.querySelector("button.navbar-toggler").addEventListener("click", function() {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarHeader = document.getElementById("navbarHeader");
        if (navbarHeader.classList.contains("collapse")) {
            navbarHeader.classList.remove("collapse");
        } else {
            navbarHeader.classList.add("collapse");
        }
    });

/* Fonctionnalité 3 */
document.querySelectorAll("div.btn-group")[0].addEventListener("click", function(){
    document.getElementsByClassName("btn-outline-secondary")[0].style.color = "red"
})

/* Fonctionnalité 4 */
document.querySelectorAll("div.btn-group")[1].addEventListener("click", function(){
    if (document.getElementsByClassName("btn-outline-secondary")[1].style.color !== 'green'){
        document.getElementsByClassName("btn-outline-secondary")[1].style.color = "green"
        }
    else {document.getElementsByClassName("btn-outline-secondary")[1].style.color = "red"}
})

/* Fonctionnalité 5 */
document.querySelectorAll("header")[0].addEventListener("click", function(event){
    event.preventDefault()
  })

/* Fonctionnalité 6 */
document.querySelectorAll("button.btn-success")[0].addEventListener("mouseover", function(){
    if (document.getElementsByClassName("card-img-top")[0].style.scale === '1'){
        document.getElementsByClassName("card-img-top")[0].style.scale = "0.2"
        
        }

})
document.querySelectorAll("button.btn-success")[0].addEventListener("mouseout", function(){
    if (document.getElementsByClassName("card-img-top")[0].style.scale !== '1'){
        document.getElementsByClassName("card-img-top")[0].style.scale = "1"

        }
})

document.querySelectorAll("button.btn-success")[1].addEventListener("mouseover", function(){
    if (document.getElementsByClassName("card-img-top")[1].style.scale === '1'){
        document.getElementsByClassName("card-img-top")[1].style.scale = "0.2"

        }

})
document.querySelectorAll("button.btn-success")[1].addEventListener("mouseout", function(){
    if (document.getElementsByClassName("card-img-top")[1].style.scale !== '1'){
        document.getElementsByClassName("card-img-top")[1].style.scale = "1"

        }
})

document.querySelectorAll("button.btn-success")[2].addEventListener("mouseover", function(){
    if (document.getElementsByClassName("card-img-top")[2].style.scale === '1'){
        document.getElementsByClassName("card-img-top")[2].style.scale = "0.2"

        }

})
document.querySelectorAll("button.btn-success")[2].addEventListener("mouseout", function(){
    if (document.getElementsByClassName("card-img-top")[2].style.scale !== '1'){
        document.getElementsByClassName("card-img-top")[2].style.scale = "1"

        }
})

document.querySelectorAll("button.btn-success")[3].addEventListener("mouseover", function(){
    if (document.getElementsByClassName("card-img-top")[3].style.scale === '1'){
        document.getElementsByClassName("card-img-top")[3].style.scale = "0.2"

        }

})
document.querySelectorAll("button.btn-success")[3].addEventListener("mouseout", function(){
    if (document.getElementsByClassName("card-img-top")[3].style.scale !== '1'){
        document.getElementsByClassName("card-img-top")[3].style.scale = "1"

        }
})

document.querySelectorAll("button.btn-success")[4].addEventListener("mouseover", function(){
    if (document.getElementsByClassName("card-img-top")[4].style.scale === '1'){
        document.getElementsByClassName("card-img-top")[4].style.scale = "0.2"

        }

})
document.querySelectorAll("button.btn-success")[4].addEventListener("mouseout", function(){
    if (document.getElementsByClassName("card-img-top")[4].style.scale !== '1'){
        document.getElementsByClassName("card-img-top")[4].style.scale = "1"

        }
})

document.querySelectorAll("button.btn-success")[5].addEventListener("mouseover", function(){
    if (document.getElementsByClassName("card-img-top")[5].style.scale === '1'){
        document.getElementsByClassName("card-img-top")[5].style.scale = "0.2"

        }

})
document.querySelectorAll("button.btn-success")[5].addEventListener("mouseout", function(){
    if (document.getElementsByClassName("card-img-top")[5].style.scale !== '1'){
        document.getElementsByClassName("card-img-top")[5].style.scale = "1"

        }
})

/* Fonctionnalité 7 */
document.querySelectorAll(".btn-secondary")[0].addEventListener("click", function(){
    const nodeList = document.querySelector(".album .row");
    const node = nodeList.lastElementChild;
    nodeList.insertBefore(node, nodeList.children[0]);
});

/* Fonctionnalité 8 */
document.querySelectorAll(".btn-primary")[0].addEventListener("click", function(event){
    event.preventDefault()
    const nodeList = document.querySelector(".album .row");
    const node = nodeList.firstElementChild;
    nodeList.appendChild(node, nodeList.children[0]);
});

/* Fonctionnalité 9 */
document.querySelector(".navbar-brand").addEventListener("keypress", function (event) {
    if (event.key === "a" || event.key === "y" || event.key === "p") {
        switch (event.key) {
            case "a":
                document.body.classList.remove("col-4", "offset-md-4", "offset-md-8");
                document.body.classList.add("col-4");
                break;
            case "y":
                document.body.classList.remove("col-4", "offset-md-4", "offset-md-8");
                document.body.classList.add("col-4", "offset-md-4");
                break;
            case "p":
                document.body.classList.remove("col-4", "offset-md-4", "offset-md-8");
                document.body.classList.add("cla-4", "offset-md-8");
                break;
        }
    }
    else if (event.key === "b"){
        document.body.classList.remove("col-4", "offset-md-4", "offset-md-8");
    }
})