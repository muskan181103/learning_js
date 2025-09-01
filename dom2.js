// document.getElementById('head').textContent ="Muskan"

let head1 = document.getElementById('head')
head1.innerHTML = "<u>Muskannnn</u>"
//one line css
head1.style.cssText = "color:red; background-color:yellow; padding:20px"
// create new element / tag from js
let head2 =  document.createElement('h2')
head2.textContent = "This is new tag created from js"
document.body.append(head2)
// create list 
let ulist = document.createElement('ul')
let listitem = document.createElement('li')
 listitem.textContent="Home"
//  let um = ulist.appendChild(listitem)
//  document.body.appendChild(um)

/*another way to print */

ulist.append(listitem)
document.body.append(ulist)