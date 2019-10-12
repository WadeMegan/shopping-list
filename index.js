function checkItem (){

    $('.shopping-list').on('click','.shopping-item-toggle',function(event){
        let itemParent = $(event.currentTarget).closest('li')
        let item = $(itemParent).children('.shopping-item')
        $(item).toggleClass('shopping-item__checked')
    })

}

function deleteItem(){

    $('.shopping-list').on('click','.shopping-item-delete',function(event){
        let itemParent = $(event.currentTarget).closest('li')
        $(itemParent).remove()
    })

}

function newItem(){

    $("button, input[type='submit']").on('click',function(event){
        event.preventDefault();
        
        const userItem = $('#shopping-list-entry').val();

        $('.shopping-list').prepend(`<li>
        <span class="shopping-item">${userItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    })

}

$(newItem)
$(deleteItem)
$(checkItem)
