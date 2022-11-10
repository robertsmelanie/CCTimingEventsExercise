// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.

// Timing Events Exercise
// 1

setTimeout(() => {
    const div1 = document.querySelector('#first');
    const p1 = document.createElement('p');
    p1.innerText = 'Hi';
    div1.append(p1);

}, 1000);


// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.

setTimeout(() => {
    const div2 = document.querySelector('#timeout-nesting');
    const p2 = document.createElement('p');
    p2.innerText = 'One';
    div2.append(p2);
    // Nested SetTimeout
    setTimeout(() => {
        //const div1 = document.querySelector('#first');
        const p3 = document.createElement('p');
        p3.innerText = 'Two';
        div2.append(p3);
    
    }, 1000);

}, 2000);

// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.

//  3a
let i = 0;
let time = setInterval(() => {
    i +- 1;
    console.log(i);
}, 1000);

// OR
/* let count = 1;
const stop = setInterval(() => {
    console.log(count);
    count++;
}, 1000);
*/
// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    clearInterval(time);
});



// BONUS…
// 4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).
// When finished, create a repository in the “TimingEventsExercise” Folder as well as on GitHub. Add and commit everything in the TimingEventsExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form in google classroom.

// 4

// const countDown = document.querySelector('#countdown');
// function startTimer(duration, display){
//     let timer = duration, minutes, seconds;
//     minutes = parseInt(timer/60, 10);
//     seconds = parseInt(timer%60, 10);
// }

// const div3 = document.querySelector('#countdown');
// const p3 = document.createElement('p');
// let num = 120;
// const count2 = setInterval(() => {
//     if (num >0){
//         let minutes = Math.floor(num/60);
//         let seconds = num - minutes * 60;
//         p3.innerText = `${minutes}:${seconds}`;
//         div3.append(p3);
//     } else {
//         clearInterval(count2);
//         p3.innerText = "TIME IS UP!";
//         div3.append(p3);
//     }
//     num--;
// }, 1000);



const div3 = document.querySelector('#countdown');
const p3 = document.createElement('p');
let num = 120;
const count2 = setInterval(() => {
    if (num >0){
        let minutes = Math.floor(num/60);
        let seconds = num - minutes * 60;
        if(seconds == 0){
            p3.innerText = `${minutes}:${seconds}0`;
        } else if (seconds < 10){
            p3.innerText = `${minutes}:${seconds}0`;
        } else {
            p3.innerText = `${minutes}:${seconds}0`;
        }
                div3.append(p3);
    } else {
        clearInterval(count2);
        p3.innerText = "TIME IS UP!";
        div3.append(p3);
    }
    num--;
}, 1000);

