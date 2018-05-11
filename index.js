'use strict';
/* eslint-env jquery */
function addShoppingListItem(shoppingItem) {
	const addedHtml = `<li>
	        <span class="shopping-item">${shoppingItem}</span>
	        <div class="shopping-item-controls">
	          <button class="shopping-item-toggle">
	            <span class="button-label">check</span>
	          </button>
	          <button class="shopping-item-delete">
	            <span class="button-label">delete</span>
	          </button>
        	</div>
				</li>`;
	return addedHtml;
}

function handleSubmit() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
		const shoppingItem = $('.js-shopping-list-entry').val();
		const addedHtml = addShoppingListItem(shoppingItem);

		// this 'if' statement prevents blank entries
		// being appended
		if (shoppingItem) {
			$('ul.shopping-list').prepend(addedHtml);
		}
    event.target.reset();
    // $('input.js-shopping-list-entry').val('');		// this line does the same thing as the line above
  });
}
function handleChecked() {
	$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
		$(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
	});
}

function handleDelete() {
	$('.shopping-list').on('click','.shopping-item-delete', function(event){
		$(this).closest('li').remove('li');
	});
}

function main() {
	handleSubmit();
	handleChecked();
	handleDelete();
}


$(main);