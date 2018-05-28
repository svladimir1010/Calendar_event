var d = new Date();
var year = d.getFullYear();
var month = d.getUTCMonth();
var today = d.getDate();
var first_day = new Date(year, month, 1);
//дата первого числа текущего месяца
var first_wday = first_day.getDay();
// день недели первого числа текущего месяца
var oneHour = 1000 * 60 * 60;
//милисекунды*минуты*часы
var oneDay = oneHour * 24;
//сутки
var nextMonth = new Date(year, month + 1, 1);
// дата первого числа следующего месяца
var last_day = Math.ceil((nextMonth.getTime() - first_day.getTime() - oneHour) / oneDay);
// количество дней-крайний день текущего месяца
var month_array = new Array("Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь");

const prev = (e) => {
	event.stopPropagation();
	document.getElementById('inp').value = '';
	let monthSpan = document.querySelector('td span').innerText.split(' ');
	let yearSpan = monthSpan[2];
	monthSpan = monthSpan[0];
	month_array.forEach((item, i, month_array) => {
		if (month_array[i] == monthSpan) {
			month = i,
				year = yearSpan;
		}
	}
	)
	month = month - 1;
	var pre_first_day = new Date(year, month, 1);
	var preYear = pre_first_day.getFullYear();
	var pre_nextMonth = new Date(year, month + 1, 1);
	first_wday = pre_first_day.getDay();
	first_wday === 0 ? first_wday = 7 : false;
	last_day = Math.ceil((pre_nextMonth.getTime() - pre_first_day.getTime() - oneHour) / oneDay);

	WhatMonth(preYear, month);
}
// ===============================  СЛЕДУЮЩИЙ ==============
const next = (e, m) => {
	event.stopPropagation();
	document.getElementById('inp').value = '';
	let monthSpan = document.querySelector('td span').innerText.split(' ');
	let yearSpan = monthSpan[2];
	monthSpan = monthSpan[0];
	month_array.forEach((item, i, month_array) => {
		if (month_array[i] == monthSpan) {
			month = i,
				year = yearSpan;
		}
	}
	)

	month = month + 1;
	var nex_first_day = new Date(year, month, 1);
	var nexYear = nex_first_day.getFullYear();
	var nex_nextMonth = new Date(year, month + 1, 1);
	first_wday = nex_first_day.getDay();
	first_wday === 0 ? first_wday = 7 : false;
	last_day = Math.ceil((nex_nextMonth.getTime() - nex_first_day.getTime() - oneHour) / oneDay);

	WhatMonth(nexYear, month);
	/*========= заполн табл ===========*/
}
var body = document.getElementsByTagName("body")[0];
body.style.background = 'red';
body.style.fontSize = '20px';
var day_table = document.createElement("table");
day_table.style.borderStyle = "dotted";
day_table.style.fontFamily = "sans-serif";
day_table.bgColor = "antiquewhite";
day_table.style.width = "100%";
day_table.className = 'table';
body.appendChild(day_table);
//добавл шапку

day_table.innerHTML = "<tr><td colspan=7 rowspan=1 id='month' style='height:7vh; color: #263332; line-height:7vh; valign:baseline'></td></tr>" + "<tr id='weekday' bgcolor='ccccff' style='height:6vh'><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>";
for (let k = 6; k--;) {
	// добавл строк ТАБЛ -- ЗАПОЛН ТАБЛ
	day_table.innerHTML += "<tr style='height:6vh'><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
}
function WhatMonth(a, b, c) {
	// СОЗДАНИЕ КАЛЕНД ПОМЕСЯЧНО ПО ДНЯМ
	/*========= заполн табл ===========*/

	for (let i = 0; i < last_day; i++) {
		var td_d = document.getElementsByTagName("td");
		if (i > 7 && i < (7 + first_wday)) {
			td_d[i].innerHTML = '';
			td_d[i].bgColor = "#FAEBD7";
			td_d[i].className = '';
		}

		!$('.pre').click(prev) ? $('.pre').click(prev) : false;
		!$('.nex').click(next) ? $('.nex').click(next) : false;

		if (i == first_wday) {
			if (b < 0 && b % 12 == 0) {
				td_d[0].innerHTML = '<button class="bt pre" title="Prev" > << </button>' + '<span>' + month_array[0] + ' - ' + a + ' год' + '</span>' + '<button class="bt nex" title="Next"  > >> </button>';

			} else if (b < -12 && b % 12 != 0) {
				td_d[0].innerHTML = '<button class="bt pre" title="Prev" > << </button>' + '<span>' + month_array[month_array.length + month % 12] + ' - ' + a + ' год' + '</span>' + '<button class="bt nex" title="Next"  > >> </button>';

			} else if (b < 0) {
				td_d[0].innerHTML = '<button class="bt pre" title="Prev" > << </button>' + '<span>' + month_array[month_array.length + month] + ' - ' + a + ' год' + '</span>' + '<button class="bt nex" title="Next"  > >> </button>';

			} else if (b < 12) {
				td_d[0].innerHTML = '<button class="bt pre" title="Prev" > << </button>' + '<span>' + month_array[b] + ' - ' + a + ' год' + '</span>' + '<button class="bt nex" title="Next" > >> </button>';

			} else if (b % 12 == 0) {
				td_d[0].innerHTML = '<button class="bt pre" title="Prev" > << </button>' + '<span>' + month_array[0] + ' - ' + a + ' год' + '</span>' + '<button class="bt nex" title="Next" > >> </button>';

			} else if (b % 12 > 0) {
				td_d[0].innerHTML = '<button class="bt pre" title="Prev" > << </button>' + '<span>' + month_array[month % 12] + ' - ' + a + ' год' + '</span>' + '<button class="bt nex" title="Next" > >> </button>';

			}
			td_d[0].bgColor = "ffcccc";
			td_d[0].align = 'center';
			td_d[0].style.fontFamily = "arial black";
			td_d[7 + i].innerHTML = 1;
			td_d[7 + i].className = 'data';

			for (let j = 1; j < last_day; j++) {
				td_d[7 + i + j].innerHTML = 1 + j;
				td_d[7 + i + j].className = 'data';
			}

			for (let c = 8; c < 46; c++)
				if (td_d[c].innerHTML == '' || c > 6 + first_wday + last_day) {
					td_d[c].bgColor = "#FAEBD7";
					td_d[c].innerHTML = '';
					td_d[c].className = '';
				} else {
					td_d[c].className = 'data';
					td_d[c].bgColor = "white";
				}

			if (c) {
				td_d[6 + first_wday + c].bgColor = "#63638B"
			}

			if (last_day == Math.ceil((nextMonth.getTime() - first_day.getTime() - oneHour) / oneDay)) {
				// маркер - закрашиваем текущий день месяца
				for (let z = 8 + last_day + first_wday; z--;) {
					if (td_d[z].innerHTML == today) {
						td_d[z].bgColor = "salmon";
						break;
					}
				}
			}
		}
	}
}
WhatMonth(year, month);
/*========= заполн табл ===========*/

$('td').hover(function (e) {
	this.innerHTML >= 1 && this.innerHTML <= 31 ? $(this).addClass('active') : false;
}, function (event) {
	event.stopPropagation();
	$(this).removeClass('active');
});

$('td').click(function (event) {
	event.stopPropagation();
	if (this.innerHTML >= 1 && this.innerHTML <= 31) {
		let data = $('tr span')[0].innerText.split(' ');
		var key = this.innerText + ' ' + data[0] + ' ' + data[2];

		var list = new List(key);
		if (localStorage.getItem(key)) {
			$('.list').children().remove();
			var lastTasks = JSON.parse(localStorage[key]);
			delete lastTasks.length;
			for (var i in lastTasks) {
				list.newTask(lastTasks[i], key);
			}
		} else {
			$('.list').children().remove();
		}

		$('.wrapper-popup').css({
			'display': 'block'
		});

		// ================================== ADD - задание
		$('#add').click(function (event) {
			event.stopPropagation();
			let text = $('#addTask').val();
			let note = $('#note').val();
			$('#addTask').val('');
			$('#note').val('');

			list.newTask({
				text: text,
				note: note
			}, key);
			list.save(key);
			//сохраняем задание в Localstor
		});
		// ================================== добавляем задание  =========
		$('.wrapper-popup').click(function (event) {
			event.stopPropagation();
			$('#add').unbind('click');
			$('#addTask').val('');

			$('.wrapper-popup').css({
				'display': 'none'
			});

		});
		$('.popup').click(function (event) {
			event.stopPropagation()
		});
	}
});

function Task(text, note, isDone) {
	this.text = text;
	this.note = note;
	this.isDone = isDone || false;
}

function List(k) { }
List.prototype = [];
List.prototype.save = function (k) {
	localStorage.setItem(k, JSON.stringify(this));
}

List.prototype.newTask = function (obj, key) {
	var task = new Task(obj.text, obj.note, obj.isDone);
	console.log("task", task);
	var num = this.push(task) - 1;
	document.querySelector('.list').appendChild(task.el(num, key));

}
Task.prototype.el = function (n, key) {

	var el = document.createElement('li');
	el.innerHTML = '<span style="color:#80413A">Задача:</span> ' + (-(-n) + 1) + ' | ' + this.text + '<hr>';
	var done = document.createElement('button');
	done.innerText = 'Сделано';
	if (this.isDone) {
		el.classList.add('passed');
	}
	var self = this;
	done.addEventListener('click', function (event) {
		event.stopPropagation();
		el.classList.toggle('passed');
		let tasks = JSON.parse(localStorage[key]);
		tasks[n].isDone = !tasks[n].isDone;
		localStorage.setItem(key, JSON.stringify(tasks));

	});
	var remove = document.createElement('button');
	remove.innerText = 'Удалить';
	remove.addEventListener('click', function (event) {
		event.stopPropagation();
		el.remove();
		let tasks = JSON.parse(localStorage[key]);
		delete tasks[n];
		localStorage.setItem(key, JSON.stringify(tasks));

	});
	var note = document.createElement('p');
	note.innerHTML = '<span style="color:#80413A">about:</span>' + '<br>' + this.note;

	el.appendChild(remove);
	el.appendChild(done);
	el.appendChild(note);
	return el;
}
