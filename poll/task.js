const pollTitle = document.getElementById('poll__title');

const pollAnswers = document.getElementById('poll__answers');

const createAnswers = ((answer) => {
    const template = document.createElement('button');
    template.classList = 'poll__answer';
    template.innerText = answer;

    return template.outerHTML;
})

let request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE) {
        foo(JSON.parse(request.responseText));
    }
});

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);
request.send();

function foo(text) {
    console.log(text);
    let title = text.data.title;

    let answers = text.data.answers;

    pollTitle.innerText = title;
    
    answers.forEach(item => {
        pollAnswers.insertAdjacentHTML('afterbegin', createAnswers(item));
    });
    
    const pollAnswer = [...pollAnswers.getElementsByClassName('poll__answer')];

    pollAnswer.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            alert('Спасибо, ваш голос засчитан');
        });
    });
};