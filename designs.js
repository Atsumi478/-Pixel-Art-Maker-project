//宣言する
const gridColor = document.getElementById('colorPicker');
const gridTable = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
//宣言 hight and width
const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
makeGrid(height, width);

//preventDefault uses to prevent autmatically refresh
sizePicker.addEventListener('click', (e) => {
    e.preventDefault();
    gridTable.firstElementChild.remove();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;

    makeGrid(height, width);
});
//when size is submitted by user makeGrid()
//reset color
function makeGrid(height, width){
   
    for (let i = 0; i < height; i++){
        let row = gridTable.insertRow(i);
        for (let c = 0; c < width; c++){
            let cell = row.insertCell(c);
            //everything click event happend it adds color
            cell.addEventListener('click', (e) => {
                e.preventDefault();
                cell.style.backgroundColor = gridColor.value;
            });
        }
    }
}
