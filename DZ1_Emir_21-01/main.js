let rating = Number(prompt('Оцените наш сервис от 1 до 10'))
if (rating >=5 && rating <=10) {
    alert('Спасибо за высокую оценку!')
} else if (rating <=4) {
    alert('Мы работаем над улучшением сервиса!')
} else {
    alert('Принимаются только оценки от 1 до 10')
}