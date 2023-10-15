const presidents = [
    { first: 'George', last: 'Washington', born: 1732, died: 1799 },
    { first: 'John', last: 'Adams', born: 1735, died: 1826 },
    { first: 'Ronald', last: 'Reagan', born: 1911, died: 2004 },
    { first: 'Gerald', last: 'Ford', born: 1913, died: 2006 },
    { first: 'Richard', last: 'Nixon', born: 1913, died: 1994 },
    { first: 'John F.', last: 'Kennedy', born: 1917, died: 1963 },
    { first: 'Harry S.', last: 'Truman', born: 1884, died: 1972 },
    { first: 'Grover', last: 'Cleveland', born: 1837, died: 1908 },
    { first: 'Chester A.', last: 'Arthur', born: 1829, died: 1886 },
    { first: 'Abraham', last: 'Lincoln', born: 1809, died: 1865 },
    { first: 'Franklin', last: 'Pierce', born: 1804, died: 1869 },
    { first: 'Lyndon B.', last: 'Johnson', born: 1908, died: 1973 },
    { first: 'Dwight D.', last: 'Eisenhower', born: 1890, died: 1969 },
];
const writers = ['Василий, Жуковский', 'Александр, Грибоедов', 'Александр, Пушкин', 'Владимир, Даль',
    'Николай, Языков', 'Федор, Тютчев', 'Николай, Гоголь', 'Алексей, Кольцов', 'Александр, Герцен',
    'Иван, Гончаров', 'Михаил, Лермонтов', 'Пётр, Ершов', 'Алексей, Толстой', 'Даниил, Заточник',
    'Александр, Радищев', 'Евгений, Баратынский', 'Петр, Вяземский', 'Александр, Бестужев-Марлинский',
    'Михаил, Загоскин', 'Сергей, Аксаков', 'Владимир, Одоевский', 'Григорий, Данилевский',
    'Алексей, Писемский', 'Дмитрий, Григорович', 'Яков, Полонский', 'Леонид, Андреев',
    'Валерий, Брюсов', 'Саша, Черный', 'Юрий, Трифонов', 'Федор, Абрамов',
    'Дмитрий, Кедрин', 'Василий, Шукшин'];

//вывод на страницу
const arrayOne = document.querySelector('#arrayOne');
presidents.forEach(president=>{
    arrayOne.append(`${president.first +' - '+ president.last }` +' дата ' + `${president.born} - ${president.died}`)
});

presidents.sort(a,b=> {
    f
});

