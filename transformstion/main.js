/* text to binary */
let name = document.querySelector(".name");
let binaryTransform = document.querySelector(".binaryTransform");
let result = document.querySelector(".result");


binaryTransform.onclick = () =>{
    let binary = [];
    let nameCode = Array.from(name.value);
    let n = name.value;
    for(let i = 0 ; i < nameCode.length;i++){
        let count =  n.charCodeAt(i) ;
        binary.push(count.toString(2));
    }
    result.innerHTML = binary.join(" ");
}
/* text to binary */


/* text to octal */
let name1 = document.querySelector(".name1");
let binaryTransform1 = document.querySelector(".binaryTransform1");
let result1 = document.querySelector(".result1");


binaryTransform1.onclick = () =>{
    let binary = [];
    let nameCode = Array.from(name1.value);
    let n = name1.value;
    for(let i = 0 ; i < nameCode.length;i++){
        let count =  n.charCodeAt(i) ;
        binary.push(count.toString(8));
    }
    result1.innerHTML = binary.join(" ");
}
/* text to octal */

/* text to hexadesimal */
let name2 = document.querySelector(".name2");
let binaryTransform2 = document.querySelector(".binaryTransform2");
let result2 = document.querySelector(".result2");


binaryTransform2.onclick = () =>{
    let binary = [];
    let nameCode = Array.from(name2.value);
    let n = name2.value;
    for(let i = 0 ; i < nameCode.length;i++){
        let count =  n.charCodeAt(i) ;
        binary.push(count.toString(16));
    }
    result2.innerHTML = binary.join(" ");
}
/* text to hexadesmal */