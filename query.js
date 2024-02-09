
const cardBody1 = document.getElementById("body1");
const cardBody2 = document.getElementById("body2");
const cardBody3 = document.getElementById("body3");
const queryAns1 = () =>{
    console.log('clicked')
    cardBody1.innerHTML = `
    <p> JavaScript is the Programming Language for the Web.

    JavaScript can update and change both HTML and CSS.
    
    JavaScript can calculate, manipulate and validate data </p>
    `
}
const queryAns2 = () =>{
    console.log('clicked2')
    cardBody2.innerHTML = `
    <p> Template literals are literals delimited with backtick

    characters, allowing for multi-line strings, string interpolation

    with embedded expressions, and special constructs called tagged templates.</p>
    `
}
const queryAns3 = () =>{
    console.log('clicked3')
    cardBody3.innerHTML = `
    <p> The Document Object Model (DOM) is the data representation

    of the objects that comprise the structure and content of a

    document on the web. This guide will introduce the DOM, look

    at how the DOM represents an HTML document in memory and how
    
    to use APIs to create web content and applications.</p>
    `
}

const buttonDisable1 = () =>{
    console.log('njbn')
    cardBody1.innerText = '';
}
const buttonDisable2 = () =>{
    cardBody2.innerText = '';
}
const buttonDisable3 = () =>{
    cardBody3.innerText = '';
}