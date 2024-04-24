let questionsEasyArr = [
	{
		question: 'Сколько лап у кота?',
		answers: ['A 1', 'B 3', 'C 4', 'D 7'],
		correctAnswer: 'C 4',
		correctPollAnswer: 'C',
		incorrectAnswer: ['A 1', 'D 7'],
	},
	{
		question: 'Что Пётр I велел брить всем боярам и дворянам?',
		answers: ['А Ноги', 'B Брови', 'C Бороды', 'D Руки'],
		correctAnswer: 'C Бороды',
		correctPollAnswer: 'C',
		incorrectAnswer: ['A Ноги', 'B Брови'],
	},
	{
		question: 'Как звучит самое распространённое телефонное приветствие?',
		answers: ['A Чао', 'B Гамарджоба', 'C Пронто', 'D Алло'],
		correctAnswer: 'D Алло',
		correctPollAnswer: 'D',
		incorrectAnswer: ['B Гамарджоба', 'A Чао'],
	},
	{
		question: 'Что кричат болельщики на хоккейном матче?',
		answers: ['A Шайбу', 'B Клюшку', 'C Мама', 'D Пожар'],
		correctAnswer: 'A Шайбу',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Клюшку', 'D Пожар'],
	},
	{
		question: 'Что народная мудрость советует отдать врагу?',
		answers: ['A Завтрак', 'B Обед', 'C Полдник', 'D Ужин'],
		correctAnswer: 'D Ужин',
		correctPollAnswer: 'D',
		incorrectAnswer: ['C Полдник', 'B Обед'],
	},
	{
		question: 'Откуда сотрудники офисов наливают в чашки воду?',
		answers: ['A Из принтера', 'B Из сканера', 'C Из степлера', 'D Из кулера'],
		correctAnswer: 'D Из кулера',
		correctPollAnswer: 'D',
		incorrectAnswer: ['A Из принтера', 'C Из степлера'],
	},
	{
		question: 'Что может возникнуть на шахматной доске?',
		answers: ['A Вечный шах', 'B Вечный мат', 'C Вечный зов', 'D Вечный двигатель'],
		correctAnswer: 'A Вечный шах',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Вечный мат', 'C Вечный зов'],
	},
	{
		question: 'Что такое каршеринг?',
		answers: ['A секонд-хенд', 'B напольный светильник', 'C аренда автомобиля', 'D брачный танец вороны'],
		correctAnswer: 'C аренда автомобиля',
		correctPollAnswer: 'C',
		incorrectAnswer: ['A секонд-хенд', 'B напольный светильник'],
	},
	{
		question: 'Каким названо «далёко» в песне из фильма «Гостья из будущего»?',
		answers: ['A чудесное', 'B опасное', 'C ужасное', 'D прекрасное'],
		correctAnswer: 'D прекрасное',
		correctPollAnswer: 'D',
		incorrectAnswer: ['B опасное', 'C ужасное'],
	},
	{
		question: 'Как иногда сокращают имя Сергей?',
		answers: ['A Серый', 'B Малиновый', 'C Бурый', 'D Вишневый'],
		correctAnswer: 'A Серый',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Малиновый', 'C Бурый'],
	},
	{
		question: 'Кто стал популярен благодаря экранизации романа Доди Смит?',
		answers: ['A 101 пехотинец', 'B 101 далматинец', 'C 101 корсиканец', 'D 101 голодранец'],
		correctAnswer: 'B 101 далматинец',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A 101 пехотинец', 'C 101 корсиканец'],
	},
	{
		question: 'Что растёт в огороде?',
		answers: ['A Лук', 'B Пистолет', 'C Пулемёт', 'D Ракета СС-20'],
		correctAnswer: 'A Лук',
		correctPollAnswer: 'A',
		incorrectAnswer: ['D Ракета СС-20', 'C Пулемёт'],
	},
	{
		question: 'Как называют микроавтобусы, совершающие поездки по определённым маршрутам?',
		answers: ['A Рейсовка', 'B Путёвка', 'C Курсовка', 'D Маршрутка'],
		correctAnswer: 'D Маршрутка',
		correctPollAnswer: 'D',
		incorrectAnswer: ['A Рейсовка', 'B Путёвка'],
	},
	{
		question: 'Какой специалист занимается изучением неопознанных летающих объектов??',
		answers: ['A Кинолог', 'B Уфолог', 'C Сексопатолог', 'D Психиатр'],
		correctAnswer: 'B Уфолог',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Кинолог', 'C Сексопатолог'],
	},
	{
		question: 'Что может появится в доме во время семейной ссоры?',
		answers: ['A Летающие тарелки', 'B Снежный человек', 'C Бермудский треугольник', 'D Тунгусский метеорит'],
		correctAnswer: 'A Летающие тарелки',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Снежный человек', 'C Бермудский треугольник'],
	},
	{
		question: 'Какой инструмент используется для измерения времени?',
		answers: ['A Часы', 'B Линейка', 'C Весы', 'D Термометр'],
		correctAnswer: 'A Часы',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Линейка', 'C Весы'],
	},
	{
		question: 'Что построил Джек в стихотворении, переведенным с английского Маршаком?',
		answers: ['A Коммунизм', 'B График', 'C Дом', 'D Маршрут'],
		correctAnswer: 'C Дом',
		correctPollAnswer: 'C',
		incorrectAnswer: ['B График', 'D Маршрут'],
	},

	{
		question: 'Какие мужчины, согласно этикету, не обязаны идти слева от дамы?',
		answers: ['A высокие', 'B пожилые', 'C иногородние', 'D военнослужащие'],
		correctAnswer: 'D военнослужащие',
		correctPollAnswer: 'D',
		incorrectAnswer: ['A высокие', 'B пожилые'],
	},
	{
		question: 'Кто основал Петербург?',
		answers: ['A Петр 1', 'B Иван Грозный', 'C Владимир Ленин', 'D Джон Леннон'],
		correctAnswer: 'A Петр 1',
		correctPollAnswer: 'A',
		incorrectAnswer: ['B Иван Грозный', 'D Джон Леннон'],
	},
	{
		question: 'Шкуру какого медведя не принято делить?',
		answers: ['A Бурого', 'B Плюшевого', 'C Белого', 'D Неубитого'],
		correctAnswer: 'D Неубитого',
		correctPollAnswer: 'D',
		incorrectAnswer: ['B Плюшевого', 'C Белого'],
	},
	{
		question: '	Как звали пушкинского Онегина?',
		answers: ['A Александр', 'B Евгений', 'C Михаил', 'D Иван'],
		correctAnswer: 'B Евгений',
		correctPollAnswer: 'B',
		incorrectAnswer: ['C Михаил', 'A Александр'],
	},
	{
		question: 'Какой инструмент используется для рисования?',
		answers: ['A Кисть', 'B Карандаш', 'C Флейта', 'D Гитара'],
		correctAnswer: 'B Карандаш',
		correctPollAnswer: 'B',
		incorrectAnswer: ['A Кисть', 'C Флейта'],
	},
];

const shuffle = (array) => {
	let m = array.length,
		t,
		i;

	// Пока есть элементы для перемешивания
	while (m) {
		// Взять оставшийся элемент
		i = Math.floor(Math.random() * m--);

		// И поменять его местами с текущим элементом
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
};

questionsEasyArr = shuffle(questionsEasyArr);

export default questionsEasyArr;
