$(function(){
    let 
    titleElem = $('.title'),
    formElem = $('form'),
    descriptionElem = $('.description'),
    listElem = $('.list');

    const addTask = () => {
        $('.empty-list').hide();

        // Собираю данные
        const title = titleElem.val();
        const description = descriptionElem.val();

        $('.list').first().prepend(`
        <li class="item">
            <div class="action">
                <h3>${title}</h3>
                <button type="button" class="delete"></button>
                <button type="button" class="arrow"></button>
            </div>
            <p class="task-description">${description}</p>
        </li>`);

        // Убираю текст с формы
        formElem.reset();
    }

    $('.add-task').on('click', function(){
        if (titleElem.val().length !== 0) {
            addTask();
        } else {
            return false
        }
    }); 

    $(".list").on("click","button.delete", function(event){
        const note = event.target.closest('.item');

        $(note).remove();

        if(listElem.children().length === 0) {
            $('.empty-list').show();
        }
    });


    $(".list").on('click', '.arrow', function(event) {
        // с помощью event.target нашли то месту куда мы нажади (т.е. на нашу карточку с заданием)
        // далее через closest, находим блок в котором лежит кнопка сворачивания
        const note = event.target.closest('.item');

        // обращаемся к последнему блоку в родителе через lastElementChild, там и лежит наше описание которе мы скрываем
        $(note.lastElementChild).slideToggle().aimate;

        const arrow = event.target.closest('.arrow');
        $(arrow).toggleClass('arrow-left');
    });
    
});