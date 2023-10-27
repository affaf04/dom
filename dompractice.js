
// Change the title of your webpage to 'DOM Practice' using textContent
const titleEl = document.querySelector("title");
titleEl.textContent = 'DOM Practice';

// Access the parent and apply the properties
const parent = document.getElementsByClassName('parent')[0];
parent.style.width = '500px';
parent.style.height = '450px';
parent.style.backgroundColor = 'red';

// Access the children of parent and apply the properties
const childEls = document.getElementsByClassName('child');
for (let childEl of childEls) {
  childEl.style.width = '100%';
  childEl.style.height = '50px';
  childEl.style.backgroundColor = 'blue';
  childEl.style.marginTop = '30px';
  childEl.style.marginBottom = '30px';
  childEl.style.marginLeft = '0';
  childEl.style.marginRight = '0';
  childEl.style.textAlign = 'center';
  childEl.style.color = '#E0D635';
  console.log(childEl);
}

// Access the grandchildren and apply the properties
const grandchildEls = document.getElementsByClassName('grandchild');
let index = 1; 

for (let grandchildEl of grandchildEls) {
  grandchildEl.style.width = '100%';
  grandchildEl.style.height = '7px';
  grandchildEl.textContent =  index; index++;
  grandchildEl.style.marginTop = '10px';
 
}

// Grandma's favorite
// Access the 14th grandchild and give them a font color of pink and italicize
// use array index to access the child and use 'children' to access the grandchild.
// Look at MDN DOM children property
// Assign a text color purple to the 14th grandchild


const favorite = document.querySelector('.grandchild')
const favoritegrandchild = favorite.querySelectorAll('.grandchild')[14]; 
favoritegrandchild.style.color= 'pink'
