// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

const min = prompt('Введіть число від 0 до 59'));
if (0 <= min && min <= 15) {
	console.log('Перша чверть');
} else if (15 < min && min <= 30) {
	console.log('Друга чверть');
} else if (30 < min && min <= 45) {
	console.log('Третя чверть');
} else {
	console.log('Четверта чверть');
}
