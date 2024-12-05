+function loadOperation(operation) {
    const container = document.getElementById('operation-container');
    container.style.display = 'block';

    const operations = {
        add: 'Add Matrices',
        subtract: 'Subtract Matrices',
        scalar: 'Scalar Multiplication',
        transpose: 'Transpose Matrix',
        inverse: 'Matrix Inverse',
    };

    container.innerHTML = `
    <h2>${operations[operation]}</h2>
    <div class="matrix-setup">
        <label for="matrix-count">Number of Matrices:</label>
        <input type="number" id="matrix-count" min="1" max="5" value="1" onchange="generateMatrices('${operation}')">
        <label for="matrix-rows">Number of Rows:</label>
        <input type="number" id="matrix-rows" min="1" max="10" value="2" onchange="generateMatrices('${operation}')">
        <label for="matrix-columns">Number of Columns:</label>
        <input type="number" id="matrix-columns" min="1" max="10" value="2" onchange="generateMatrices('${operation}')">
    </div>
    <div id="matrices-input" class="matrix-input"></div>
    <button onclick="performOperation('${operation}')">Calculate</button>
    <button onclick="resetOperation()">Reset</button>
`;

    generateMatrices(operation);
}

function generateMatrices(operation) {
    const matrixCount = document.getElementById('matrix-count').value;
    const matrixRows = document.getElementById('matrix-rows').value;
    const matrixColumns = document.getElementById('matrix-columns').value;
    const container = document.getElementById('matrices-input');

    container.innerHTML = '';
    for (let i = 0; i < matrixCount; i++) {
        const matrixDiv = document.createElement('div');
        matrixDiv.className = 'matrix';
        matrixDiv.innerHTML = `<h3>Matrix ${i + 1}</h3>`;
        for (let row = 0; row < matrixRows; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.style.display = 'flex';
            for (let col = 0; col < matrixColumns; col++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.placeholder = `A[${row + 1}][${col + 1}]`;
                rowDiv.appendChild(input);
            }
            matrixDiv.appendChild(rowDiv);
        }
        container.appendChild(matrixDiv);
    }
}


function performOperation(operation) {
    alert(`Performing ${operation}... (Backend logic not included here)`);
}

function resetOperation() {
    document.getElementById('operation-container').style.display = 'none';
}
