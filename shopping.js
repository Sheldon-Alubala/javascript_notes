// let output;

// output = document.all


// output = document.documentElement
// output = document.body
// output = document.head
// output = document.body.children
// output = document.URL
// output = document.characterSet
// output = document.contentType
// output = document.forms
// output = document.forms[0].id
// output = document.forms[0].method
// output = document.forms[0].action
// //document.forms[0].id = 'new-id'
// output = document.documentElement
// output = document.
// output = document.links
// output = document.images


// console.log(output);

//DOM SELECTORS ELEMENT
//document.getElementById('')
// let output
// output = document.getElementById('item-list')
// output = document.getElementById('item-list').id
// output = document.getElementById('item-list').className
// output = document.getElementById('item-list').getAttribute('id')

// SET ATTRIBUTES
// document.getElementById('app-title').title = 'Shopping New'
// document.getElementById('app-title').setAttribute('class', 'title')

// //GET/CHANGE CONTENT
// const title = document.getElementById('app-title')
// title.textContent = "To Do List"
// //console.log(title.textContent);
// title.innerText = 'Gadamit'
// title.innerHTML = '<strong>Shopping List</strong>'

// //CHANGE STYLE
// title.style.color = 'blue'
// title.style.backgroundColor = 'gray'
// title.style.borderRadius = '10px'
// title.style.padding = '10px'

// //QUERYSELECTOR
// //document.querySelector()
// //output = document.querySelector('h1')
// console.log(document.querySelector('h1'));  //html tag
// console.log(document.querySelector('#app-title'));  //by id
// console.log(document.querySelector('.title'));   //by class
// //console.log(document.querySelector('input[type="text]'));
// console.log(document.querySelector('li:nth-child(2)'));

// const secitm = document.querySelector('li:nth-child(3)')
// secitm.innerText = 'Pine Apple Juice'

// //use these methods on other elements
// const list = document.querySelector('ul')
// const dec = list.querySelector('li').style.color = 'red'
// //dec.style.color = 'red'

// //QUERY SELECTOR ALL
// //querySelectorAll()
// const listItems = document.querySelectorAll('.item')

// console.log(listItems[1].innerText);

// listItems[1].style.color = 'red'

// listItems.forEach((item, index) => {
//     item.style.color = 'blue'

//     if(index === 3) {
//         item.add('paw paw')
//     }
//     if (index === 0) {
//         item.innerHTML= `Bananas
//         <button class="remove-item btn-link text-red">
//                     <i class="fa-solid fa-xmark"></i>
//                 </button>`
//     }
// })

// //other methods like selector all
// const listItems2 = document.getElementsByClassName('item')
// console.log(listItems2);

// const listarr = Array.from(listItems2)


// listarr.forEach((item) => {
//     item.style.color = 'orange'
// })
// const listItems3 = document.getElementsByTagName('li')
// console.log(listItems3);

//CREATING AND APPENDING ELEMENT 
// const div = document.createElement('li')
// div.className = 'tool'
// div.id = 'tool1'
// //div.title = 'thyTool'
// div.setAttribute('title', 'thyTitle')

// //div.innerText = 'groceries'

// const text = document.createTextNode('Groceries')
// div.appendChild(text)
// document.querySelector('ul').appendChild(div)

// //console.log(div);


// //create element and innerHTML
// //QUICK AND DIRTY WAY
// function createListItem (item) {
//     const li = document.createElement('li')

//     li.innerHTML = `Eggs
//     <button class="remove-item btn-link text-red">
//         <i class="fa-solid fa-xmark"></i>
//     </button>`

//     document.querySelector('.item').appendChild(li)
// }
// createListItem('Eggs')

// //CLEAN AND PERFOMANT
// function createNewItem (item) {
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(item))

//    const button = createButton('remove-item btn-link text-red')

//     li.appendChild(button)
    
//     document.querySelector('.items').appendChild(li)
    
// }

// //REFACTOR TO MULTIPLE FUNCTIONS
// function createButton (classes) {
//     const button = document.createElement('button')
//     button.className = classes

//     const icon = createIcon ('fa-solid fa-xmark')
//     button.appendChild(icon)

//     return button
// }
// function createIcon (classes) {
//     const icon = document.createElement('i')
//     icon.className = classes
//     return icon
// }
// createNewItem('Gold')
// createNewItem('Burger')


// //INSERT ELEMENT
// //insertAdjacentElement example
// function insertElement () {
//     const filter = document.querySelector('.filter')

//     const h1 = document.createElement('h1')
//     h1.textContent = 'insertAdjacentElement'

//     filter.insertAdjacentElement('beforebegin', h1)
// }
// insertElement()

// //insertadjacent text
// function insertText () {
//     const item = document.querySelector('li:first-child')

//     item.insertAdjacentText('afterend', 'insertadjacent text')
// }
// insertText()

// //insert html element
// function insertHtml () {
//     const btnClear = document.querySelector('.btn-clear')

//     btnClear.insertAdjacentHTML('afterend', '<h3>inserted HTML element</h3>')
// }
// insertHtml()
// //insertBefore
// function insertItemBefore() {
//     const ul = document.querySelector('ul')

//     const li = document.createElement('li')
//     li.textContent = 'insertBefore'

//     const thirdItem = document.querySelector('li:nth-child(5')
//     ul.insertBefore(li, thirdItem)
// }
// insertItemBefore()

// //replace element
// function replaceFirstItem ( ) {
//     const first = document.querySelector('li:first-child')

//     const li = document.createElement('li')
//     li.textContent = 'Replaced Apple'

//     first.replaceWith(li)
// }
// replaceFirstItem()

// //remove firstElement
// function removeFirstItem () {
//     const ul = document.querySelector('ul')
//     const li = document.querySelector('li:first-child')

//     ul.removeChild(li)
// }
// removeFirstItem()

// function removeItem (itemNumber) {
//     const ul = document.querySelector('ul')
//     const li = document.querySelector(`li:nth-child(${itemNumber})`)

//     ul.removeChild(li)
// }
// removeItem(2)


// function removeItem (itemNumber) {
//     const ul = document.querySelector('ul')
//     const li = document.querySelectorAll('li')[itemNumber]

//     ul.removeChild(li)
// }
// removeItem(1)


// // function removeClearBtn () {
// //     const clearBtn = document.querySelector('#clear')
// //     clearBtn.remove()
// // }
// // removeClearBtn()

// function removeItem3 (itemNumber) {
// const li = document.querySelectorAll('li')
// li[itemNumber - 1].remove()
// }
// removeItem3(2)


//EVENTS
// function onClear () {
//      alert('Enter Account Number')
//  }

//JAVASCRIPT EVENT LISTENER
//  clearBtn = document.querySelector('#clear')

//  function onClear () {
//      const itemLists = document.querySelector('ul')
//     //  itemLists.innerHTML = ''

//     // const items = document.querySelectorAll('li')
//     // items.forEach((item) => item.remove())

//     while (itemLists.firstChild) {
//         itemLists.removeChild(itemLists.firstChild)
//     }
// }


// clearBtn.addEventListener('click', onClear)


// clearBtn.onclick = function () {
//     alert('clear')
// }

// ADDD EVENT LISTENER 
// clearBtn.addEventListener('click', function() {
//     alert('clear')
// })

// clearBtn.addEventListener('click', () => console.log('clear from console'))

//  clearBtn.addEventListener('click', onClear)

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 7000)

// setTimeout(()=> {clearBtn.click()}, 5000)


// //MOUSE EVENTS
// const logo = document.querySelector('h1')
// const onclick = () => { 
//     if (document.body.style.backgroundColor !== 'orange') {
//         document.body.style.backgroundColor = 'orange'
//         document.body.style.color = 'black'
//     } else {
//         document.body.style.backgroundColor = 'purple'
//         document.body.style.color = 'black'
//     }
// }
// const onDoubleClick = () => {
//     if (document.body.style.backgroundColor !== 'blue') {
//         document.body.style.backgroundColor = 'blue'
//         document.body.style.color = 'white'
//     } else {
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//     }
// }
// const onRightClick = () => {console.log('right clicked')}

// const onMouseDown = () => {console.log('MOUSE DOWN EVENT')}

// const onMouseUp = () => {console.log('MOUSE up EVENT')}

// const onMouseWheel = () => {console.log('MOUSE wheel EVENT')}

// const onMouseOver = () => {console.log('MOUSE over EVENT')}

// const onMouseOut = () => {console.log('MOUSE out EVENT')}

// const onDragStart = () => {console.log('Drag start')}

// const onDrag = () => {console.log('Dragging event')}

// const onDragEnd = () => {console.log('Drag end')}



// logo.addEventListener('click', onclick)
// logo.addEventListener('dblclick', onDoubleClick)
//  logo.addEventListener('contextmenu', onRightClick)
//  logo.addEventListener('mousedown', onMouseDown)
//  logo.addEventListener('mouseup', onMouseUp)
//  logo.addEventListener('wheel', onMouseWheel)
//  logo.addEventListener('mouseover', onMouseOver)
//  logo.addEventListener('mouseout', onMouseOut)
//  logo.addEventListener('dragstart', onDragStart)
//  logo.addEventListener('drag', onDrag)
//  logo.addEventListener('dragend', onDragEnd)


 //Event Object
 /*
 const btn = document.querySelector('#clear')

 const onClick = function (e) {
    console.log(e.target);
    e.target.style.backgroundColor = 'orange'
 }

 btn.addEventListener('click', onClick )

 document.body.addEventListener('click', function (e) {
    // console.log(e.target);
    // console.log(e.currentTarget)
    // console.log(e.type);
    // console.log(e.timeStamp);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    // console.log(e.screenX);
    // console.log(e.screenY);
 })

 document.querySelector('a').addEventListener('click',
  function (e) {
    e.preventDefault()

    console.log('link was clicked');
 })
 

 //KEYBOARD EVENTS
 const itemInput = document.getElementById('item-input')

 const onKeyPress = (e) => {
    console.log('keypressed');
 }
 //itemInput.addEventListener('keypress', onKeyPress)



 const onKeyUp = (e) => {
    console.log('keyRELEASED');
 }
 //itemInput.addEventListener('keyup', onKeyUp)

 const onKeyDown = (e) => {
    console.log('keydown');
    if(e.repeat) {
        console.log('You are holding down '+ e.key);
       }
 }
 itemInput.addEventListener('keydown', onKeyDown)

 const onKey = (e) => {
    //key
    console.log(e.key);
   // document.querySelector('h1').innerText = e.key
//    if (e.key == 'Enter') {
//     alert('you pressed enter')

    //keyCode
    if (e.keyCode === 13) {
        alert('you pressed enter')
   }

   //code
   if (e.code === 'Digit1') {
    alert('you pressed 1');
   }
   
 }
 itemInput.addEventListener('keyup', onKey)
 */