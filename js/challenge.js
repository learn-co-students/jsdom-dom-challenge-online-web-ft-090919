let paused = false;
document.addEventListener('DOMContentLoaded', function() {
    window.setInterval(timerIncrement, 1000);
    document.getElementById('minus').onclick = timerDecrement;
    document.getElementById('plus').onclick = timerIncrement;
    document.getElementById('pause').onclick = pause;
    document.getElementById('heart').onclick = like;
    document.getElementById('comment-form').addEventListener('submit', addComment);
});
const timerModify = x => {
    if (!paused){
        const timer = document.getElementById('counter');
        timer.textContent = parseInt(timer.textContent) + x;
    }
}
const addComment = e => {
    e.preventDefault()
    let comment = document.createElement('p');
    let commentText = document.getElementById('comment-input')
    comment.textContent = commentText.value;
    commentText.value = '';
    document.getElementById('list').appendChild(comment);
}
function like() {
    const time = parseInt(document.getElementById('counter').innerText);
    let id = `${time}-likes`
    let li = document.getElementById(id);
    if (li != null) {
        let likes = parseInt(li.innerText.split(' ')[4]) + 1
        li.innerText = `${time} has been liked ${likes} times`;
    } else {
        li = document.createElement('li')
        li.id = id
        li.innerText = `${time} has been liked 1 time`;
        document.querySelector('.likes').appendChild(li);
    }
}
function timerIncrement() {
    timerModify(1);
}
function timerDecrement() {
    timerModify(-1);
}

function pause() {
    paused= !paused;
    document.getElementById('pause').textContent = paused ? 'resume' : 'pause'
}
