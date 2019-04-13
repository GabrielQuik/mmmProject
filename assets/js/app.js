const matrixA = [],
    matrixB = [],
    matrixC = [];

function init() {
    let matrixInput = getMatrixInput();

    if(isInputCorrect(matrixInput.matrixSizes)) { //check if all inputs are of good length
        createMatrixA(matrixInput.matrixAValues, matrixInput.matrixSizes[0]);
        createMatrixB(matrixInput.matrixBValues);
        createMatrixC(matrixInput.matrixCValues);
    } else {
        alert("Popraw dane wejściowe!");
    }
}

function getMatrixInput() {
    let matrixAValues = document.querySelector("#matrixA").value.split([' ']);
    let matrixBValues = document.querySelector("#matrixB").value.split([' ']);
    let matrixCValues = document.querySelector("#matrixC").value.split([' ']);
    let matrixASize = matrixAValues.length;
    let matrixBSize = matrixBValues.length;
    let matrixCSize = matrixCValues.length;
    return {
        matrixAValues: matrixAValues,
        matrixBValues: matrixBValues,
        matrixCValues: matrixCValues,
        matrixSizes: [matrixASize, matrixBSize, matrixCSize]
    };
}

function isInputCorrect(matrixSizes) {
    if(matrixSizes[0] === matrixSizes[1] && matrixSizes[1] === matrixSizes[2]) {
        if(matrixSizes[0] > 1 && matrixSizes[0] < 7) {
            return true;
        } else return false;
    } else return false;
}

function createMatrixA(matrixAValues, matrixASize) { //done


    for(let y=0; y < matrixASize; y++) {
        matrixA[y] = new Array();

        for(let x=0; x < matrixASize - 1; x++) {
            (y === x+1) ? matrixA[y].push(1) : matrixA[y].push(0);
        }

        matrixA[y].push(matrixAValues[y] * -1);
        console.log(matrixA[y]);
    }
}

function createMatrixB(matrixBValues) {
    matrixBValues = matrixBValues.map(Number);

    console.log(matrixBValues);
}

function createMatrixC(matrixCValues) {
    matrixCValues = matrixCValues.map(Number);
    console.log(matrixCValues);
}

$("input[id = 'matrixA']").on("keypress", function(event) {
    (event.which === 13) ? init() : '';
});


