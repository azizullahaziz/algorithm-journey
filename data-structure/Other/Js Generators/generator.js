
// Generator function for Fibonacci sequence
function* fibonacciGenerator() {
    let a = 0, b = 1;
    
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Initialize generator
let fibGen = fibonacciGenerator();

// Get DOM elements
const fibVisual = document.getElementById('fibVisual');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const currentA = document.getElementById('currentA');
const currentB = document.getElementById('currentB');
const logEntries = document.getElementById('logEntries');

// State tracking
let currentIndex = -1;
let values = [];

// Update visualization
function updateVisualization() {
    const fibNumbers = fibVisual.querySelectorAll('.fib-number');
    
    // Remove active class from all
    fibNumbers.forEach(num => num.classList.remove('active'));
    
    // Add active class to current
    if (currentIndex >= 0 && currentIndex < fibNumbers.length) {
        fibNumbers[currentIndex].classList.add('active');
    }
    
    // Update state display
    if (values.length > 0) {
        const [a, b] = getCurrentState();
        currentA.textContent = a;
        currentB.textContent = b;
    }
}

// Get current state based on values
function getCurrentState() {
    if (values.length === 0) return [0, 1];
    if (values.length === 1) return [values[0], 1];
    
    const a = values[values.length - 1];
    const b = values.length === 1 ? 1 : values[values.length - 1] + values[values.length - 2];
    return [a, b];
}

// Add log entry
function addLogEntry(value) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = `Yielded value: ${value}`;
    logEntries.prepend(entry);
}

// Get next value from generator
function getNextValue() {
    const result = fibGen.next();
    values.push(result.value);
    currentIndex = values.length - 1;
    addLogEntry(result.value);
    updateVisualization();
}

// Reset generator
function resetGenerator() {
    fibGen = fibonacciGenerator();
    values = [];
    currentIndex = -1;
    logEntries.innerHTML = '';
    updateVisualization();
}

// Event listeners
nextBtn.addEventListener('click', getNextValue);
resetBtn.addEventListener('click', resetGenerator);

// Initialize
updateVisualization();

// Auto-run demonstration
const demoRun = () => {
    resetGenerator();
    setTimeout(() => getNextValue(), 600);
    setTimeout(() => getNextValue(), 1200);
    setTimeout(() => getNextValue(), 1800);
    setTimeout(() => getNextValue(), 2400);
    setTimeout(() => getNextValue(), 3000);
};

// Start demo on page load
window.addEventListener('load', demoRun);