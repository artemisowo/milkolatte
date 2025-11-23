const button2025 = document.getElementById('year-2025')
const button2026 = document.getElementById('year-2026')

const entries2025 = document.getElementById('entries-2025')
const entries2026 = document.getElementById('entries-2026')

const entriesList = document.getElementById('entries')

const removeActive = () => {
    entriesList.forEach(element => {
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        }
    })
}

// date toggle buttons

button2025.addEventListener('click', () => {
    entries2025.classList.add('active')
    entries2026.classList.remove('active')
});
button2026.addEventListener('click', () => {
    entries2026.classList.add('active')
    entries2025.classList.remove('active')
});