import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// elements
const form = document.querySelector('form');
const type = document.querySelector('#type');
const from = document.querySelector('#from');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const noItems = document.querySelector('.no-items');
// ListTemplate instance
const list = new ListTemplate(ul);
// event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [from.value, details.value, amount.valueAsNumber];
    // check if forms aren't empty
    if (!from.value || !details.value || !amount.valueAsNumber) {
        return alert('Please enter all the details...');
    }
    if (type.value === 'invoice') {
        // check what type of instance
        // normal way
        doc = new Invoice(from.value, details.value, amount.valueAsNumber);
    }
    else {
        // tuple way
        doc = new Payment(...values);
    }
    // remove no items warning
    if (noItems.style.display !== 'none') {
        noItems.style.display = 'none';
    }
    // render using list template's method
    list.render(doc, type.value, 'end');
});
