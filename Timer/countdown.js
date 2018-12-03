class timer {
    constructor () {}
    countdown () {
        let count = document.getElementById('timer');
        let time = 60;
        let a = setInterval(function () {
            if (time > 0) {
                var letters = 'Start';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                console.log(color)
                count.style.color = color;
                count.innerHTML = time;
                time = time - 1;
            }  else {
                alert('You got me going');
                clearInterval(a);
            }
        }, 1000);
    }}

    let mypage = new timer();
