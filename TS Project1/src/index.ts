const btnEle = document.querySelector('.click') as HTMLButtonElement;
const bodyElem: HTMLElement = document.body;
let isWhite: boolean = false;

btnEle.addEventListener('click', () : void => {
    console.log("Clicked !!");

    if(isWhite) {
        bodyElem.style.backgroundColor = "";
    } else {
        bodyElem.style.backgroundColor = "#de8bd8bb"
    }

    isWhite = !isWhite;
});