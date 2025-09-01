//DOM-Document Object Model
//To change in HTML AND CSS through javascript this is called DOM.
//Html ke elements ko target inside js is called the node(Element-Node)
//Html text ko target karna is textnode(Text-TextNode)

//document.write("<h1>Hello JavaScript...!!!</h1>")//Document me html ka page,write ek keyword hai===================
//if we use get element by id use karte hai toh single node return karta hai
//let hd=document.getElementById("head")
//console.log(hd);

//for changing the text in js======================================================================================
// hd.textContent="Muskan Chaurasia"
// let h=hd.textContent
// console.log(h);

// hd.textContent="change"
//Text ke saath saath tag apply karne ke liye innerhtml use karte hai
//hd.innerHTML="<u> again change </u>"
//==========================================================================================================
//To add the text in center we use set attribute

let head2=document.getElementById("head2")
head2.setAttribute('align','center')
//To remove the any attribute 
document.body.removeAttribute('bgcolor')