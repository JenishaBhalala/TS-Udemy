const btnEle = document.querySelector(".click");
const bodyElem = document.body;
let isWhite = false;
btnEle.addEventListener("click", ()=>{
    console.log("Clicked !!");
    if (isWhite) bodyElem.style.backgroundColor = "";
    else bodyElem.style.backgroundColor = "#de8bd8bb";
    isWhite = !isWhite;
});

//# sourceMappingURL=index.377278e2.js.map
