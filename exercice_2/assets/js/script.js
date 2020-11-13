let changeText = document.getElementById("modificateText")

function buttonBold() {
    if (changeText.style.fontWeight == 'normal') {
        changeText.style.fontWeight = 'bold';
    } else {
        changeText.style.fontWeight = 'normal';
    }
};

function buttonColor() {
    if (changeText.style.color == 'black') {
        changeText.style.color = 'purple'; 
    } else {
        changeText.style.color = 'black';
    }
};

function buttonBigger() {
    if (changeText.style.fontSize == "1rem") {
        changeText.style.fontSize = "3rem";
    } else {
        changeText.style.fontSize = "1rem";
    }
};