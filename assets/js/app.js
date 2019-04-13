const matrixA = [],
    matrixB = [],
    matrixC = [];

function init() {
    if(true) { //check if all inputs are of good length
        createMatrixA();
        createMatrixB();
        createMatrixC();
    } else {
        alert("Popraw dane wejściowe!");
    }
}

function createMatrixA() { //done
    let matrixAValues = document.querySelector("#matrixA").value.split([' ']);
    let matrixASize = matrixAValues.length;

    for(let y=0; y < matrixASize; y++) {
        matrixA[y] = new Array();

        for(let x=0; x < matrixASize - 1; x++) {
            (y === x+1) ? matrixA[y].push(1) : matrixA[y].push(0);
        }

        matrixA[y].push(matrixAValues[y] * -1);
        console.log(matrixA[y]);
    }
}

function createMatrixB() {
    let matrixBValues = document.querySelector("#matrixB").value.split([' ']);
    let matrixBSize = matrixBValues.length;
    matrixBValues = matrixBValues.map(Number);

    console.log(matrixBValues);
}

function createMatrixC() {
    let matrixCValues = document.querySelector("#matrixC").value.split([' ']);
    let matrixCSize = matrixCValues.length;
    matrixCValues = matrixCValues.map(Number);
    console.log(matrixCValues);
}

$("input[id = 'matrixA']").on("keypress", function(event) {
    (event.which === 13) ? init() : '';
});


