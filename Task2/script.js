var mininput = document.getElementById('min');
var maxinput = document.getElementById('max');
var generate = document.getElementById('generate');
var p1 = document.getElementById('p1');
var randomnumber;
var count;
function random(min,max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    randomnumber = Math.floor(Math.random() * (max-min+1))+min;
    count = 0;
    p3.textContent = '';
}
var show = document.getElementById('show');
show.addEventListener('click',(event)=>{
    p3.textContent = randomnumber;
})
generate.addEventListener('click',(event)=> {
    var min = parseFloat(mininput.value);
    var max = parseFloat(maxinput.value);
    if(min==max) {
        p1.textContent='The min and max value are same';
    }
    else {
    random(min,max);
    }
})
var guess = document.getElementById('user');
var p2 = document.getElementById('p2');
function check() {
    p2.textContent = '';
    var userguess = parseFloat(guess.value);
    if(isNaN(userguess)) {
        p2.textContent = 'Enter a numeric value';
        return;
    }
    count++;
    if(userguess > randomnumber) {
        p2.textContent = 'lower';
    }
    else if(userguess < randomnumber) {
        p2.textContent = 'higher';
    }
    else {
        p2.textContent = `You guessed correctly! Attempts: ${count}`;
    }
}
guess.addEventListener('keypress',(event)=> {
    if(event.key=='Enter') {
        check();
    }
});