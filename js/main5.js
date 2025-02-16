document.querySelectorAll('.grid-item1, .grid-item2, .grid-item3').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.fontWeight = 'bold'; // Делаем шрифт жирным при наведении
    });
    item.addEventListener('mouseout', function() {
        item.style.fontWeight = ''; // Сбрасываем шрифт при уходе курсора
    });
});



document.querySelectorAll('.item-1a1').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.backgroundColor = '#ffb082'; // Изменяем цвет у текущего элемента при наведении
    });
    item.addEventListener('mouseout', function() {
        item.style.backgroundColor = ''; // Сбрасываем цвет при уходе курсора
    });
});

document.querySelectorAll('.item-1a2').forEach(function(item) {
    item.addEventListener('click', function(event) {
        if (event.ctrlKey) {
            item.style.backgroundColor = '#ffb082'; // Изменяем цвет у текущего элемента при нажатии Ctrl
        }
    });
});


document.querySelectorAll('.item-1a3').forEach(function(item) {
    item.addEventListener('click', function(event) {
        if (event.shiftKey) {
            item.style.backgroundColor = '#ffb082'; // Изменяем цвет у текущего элемента при нажатии Shift
        }
    });
});








