function calculateRectangleArea() {
    //get rectangle wide value
    const rectangleWidthValue = document.getElementById('rectangle-width');
    const rectangleValueWidthText = rectangleWidthValue.value;
    const width = parseFloat(rectangleValueWidthText);
    console.log(width);

    //get rectangle length value
    const rectangleLengthValue = document.getElementById('rectangle-length');
    const rectangleValueLengthText = rectangleLengthValue.value;
    const length = parseFloat(rectangleValueLengthText);
    console.log(length);

    //get rectangle area
    const area = width * length;
    console.log('The rectangle area is:', area);

    //rectangle area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;


    

    


}