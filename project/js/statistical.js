var container__information = document.querySelector('.container__information');
var btn__Statistics = document.querySelector('.btn__Statistics');

function toggleStatistics () {
    container__information.classList.toggle('hide');
}

btn__Statistics.addEventListener('click',toggleStatistics);