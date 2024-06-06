const month1 = [
    "Fit Test", "Plyometric Cardio Circuit", "Cardio Power & Resistance", "Cardio Recovery", "Pure Cardio", "Plyometric Cardio Circuit", "Descanso",
    "Cardio Power & Resistance", "Pure Cardio", "Plyometric Cardio Circuit", "Cardio Recovery", "Cardio Power & Resistance", "Pure Cardio & Cardio Abs", "Descanso",
    "Fit Test", "Plyometric Cardio Circuit", "Pure Cardio & Cardio Abs", "Cardio Recovery", "Cardio Power & Resistance", "Plyometric Cardio Circuit", "Descanso",
    "Cardio Core & Balance", "Cardio Core & Balance", "Cardio Core & Balance", "Cardio Core & Balance", "Cardio Core & Balance", "Cardio Core & Balance", "Descanso"
];

const recoveryWeek = [
    "Cardio Core & Balance", "Cardio Core & Balance", "Cardio Core & Balance", "Cardio Core & Balance", "Cardio Core & Balance", "Cardio Core & Balance", "Descanso"
];

const month2 = [
    "Fit Test & Max Interval Circuit", "Max Interval Pylo", "Max Cardio Conditioning", "Max Recovery", "Max Interval Circuit", "Max Interval Pylo", "Descanso",
    "Max Cardio Conditioning", "Max Interval Circuit", "Max Interval Pylo", "Max Recovery", "Max Cardio Conditioning & Insane Abs", "Max Interval Sport Training", "Descanso",
    "Fit Test & Max Interval Circuit", "Max Interval Pylo", "Max Cardio Conditioning & Insane Abs", "Max Recovery", "Max Interval Circuit", "Max Interval Sport Training", "Descanso",
    "Max Interval Pylo", "Max Cardio Conditioning & Insane Abs", "Max Interval Circuit", "Max Interval Sport Training", "Max Interval Pylo", "Max Cardio Conditioning & Insane Abs", "Fit Test"
];

const createCalendar = (days, containerId) => {
    const container = document.getElementById(containerId);
    days.forEach((day, index) => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day' + (day.toLowerCase().includes('descanso') ? ' rest' : '');
        dayElement.innerHTML = `<b>Día ${index + 1}</b><br>${day} <i class="fas fa-check icon"></i>`;
        dayElement.addEventListener('click', () => {
            dayElement.classList.toggle('completed');
        });
        container.appendChild(dayElement);
    });
};

const addClearButton = () => {
    const button = document.querySelector('.button.clear');
    button.addEventListener('click', () => {
        document.querySelectorAll('.day.completed').forEach(day => {
            day.classList.remove('completed');
        });
    });
};

const addSaveButton = () => {
    const button = document.querySelector('.button.save');
    button.addEventListener('click', () => {
        const progress = [];
        document.querySelectorAll('.day').forEach((day, index) => {
            if (day.classList.contains('completed')) {
                progress.push(index);
            }
        });
        localStorage.setItem('workoutProgress', JSON.stringify(progress));
        alert('¡Progreso guardado!');
    });
};

const loadProgress = () => {
    const progress = JSON.parse(localStorage.getItem('workoutProgress'));
    if (progress) {
        progress.forEach(index => {
            document.querySelectorAll('.day')[index].classList.add('completed');
        });
    }
};

createCalendar(month1, 'month1');
createCalendar(recoveryWeek, 'recovery');
createCalendar(month2, 'month2');
addClearButton();
addSaveButton();
loadProgress();

