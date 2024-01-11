const list = document.querySelector('#categories');
const item = list.querySelectorAll('.item');

console.log('Number of categories: ' + item.length);

item.forEach(element => {
    const title = element.querySelector('h2')
    const itemList = element.querySelectorAll('li')
    console.log('Category: ' + title.textContent)
    console.log('Elements:' + itemList.length)
});
