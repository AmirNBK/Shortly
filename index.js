const Items = ['Features', 'Pricing', 'Resources'];

const header = document.querySelector('.headerItems');

const headerItems = Items.map(item => `<li> ${item} </li>`);

header.innerHTML = headerItems.join('');