let words;

fetch("resources/valid-wordle-words.txt").then(convertData).then(processData);

function convertData(rawData){
    return rawData.text();
}

function processData(strData){
    words = strData.split('\n');
}


let one = document.getElementById("1a");
let two = document.getElementById("1b");
let three = document.getElementById("1c");
let four = document.getElementById("1d");
let five = document.getElementById("1e");

let index = 1;

document.addEventListener('keydown', function(event){
    const key = event.key;
    if (key.length === 1 && key.match(/[a-z]/i)){
        if(one.value == ''){
            one.value = key;
        }else if (two.value == ''){
            two.value = key;
        }else if (three.value == ''){
            three.value = key;
        }else if (four.value == ''){
            four.value = key;
        }else if(five.value == ''){
            five.value = key;
        }
    }

    if(key === "Backspace"){
        if(five.value != ''){
            five.value = '';
        }else if(four.value != ''){
            four.value = '';
        }else if(three.value != ''){
            three.value = '';
        }else if(two.value != ''){
            two.value = '';
        }else if(one.value != ''){
            one.value = '';
        }
    }

    if(key === "Enter"){
        if(five.value != ''){
            let uw = [one, two, three, four, five];
            let checkedLetters = [false, false, false, false, false];
            for(let i = 0; i < 5; i++){
                if(uw[i].value === letters[i]){
                    uw[i].style.backgroundColor = "lightgreen";
                    checkedLetters[i] = true;
                }
            }
            if(checkedLetters[0] && checkedLetters[1] && checkedLetters[2] && checkedLetters[3] && checkedLetters[4]){
                showSuccessMessage();
                document.removeEventListener("keydown");
            }
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 5; j++){
                    if(uw[i].value === letters[j] && checkedLetters[j] === false && uw[i].style.backgroundColor != "lightgreen"){
                        uw[i].style.backgroundColor = "yellow";
                        checkedLetters[j] = true;
                        break;
                    }
                }
                if(uw[i].style.backgroundColor != "lightgreen" && uw[i].style.backgroundColor != "yellow"){
                    uw[i].style.backgroundColor = "lightgrey";
                }
            }
            
            if(index === 1){
                one = document.getElementById("2a");
                two = document.getElementById("2b");
                three = document.getElementById("2c");
                four = document.getElementById("2d");
                five = document.getElementById("2e");
            }else if(index === 2){
                one = document.getElementById("3a");
                two = document.getElementById("3b");
                three = document.getElementById("3c");
                four = document.getElementById("3d");
                five = document.getElementById("3e");
            }else if(index === 3){
                one = document.getElementById("4a");
                two = document.getElementById("4b");
                three = document.getElementById("4c");
                four = document.getElementById("4d");
                five = document.getElementById("4e");
            }else if(index === 4){
                one = document.getElementById("5a");
                two = document.getElementById("5b");
                three = document.getElementById("5c");
                four = document.getElementById("5d");
                five = document.getElementById("5e");
            }else if(index === 5){
                one = document.getElementById("6a");
                two = document.getElementById("6b");
                three = document.getElementById("6c");
                four = document.getElementById("6d");
                five = document.getElementById("6e");
            }else if(index === 6){
                showFailMessage();
                document.removeEventListener("keydown");
            }
            index++;
        }
    }
});

function showSuccessMessage(){
    document.getElementById("success-box").style.display = "block";
}

function showFailMessage(){
    document.getElementById("correct-word").innerHTML = word;
    document.getElementById("fail-box").style.display = "block";
}

document.getElementById("reload-button1").addEventListener("click", function(){
    location.reload();
});

document.getElementById("reload-button2").addEventListener("click", function(){
    location.reload();
});