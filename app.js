const form = document.querySelector('#tweetForm');


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const tweetTxt = document.querySelector('ul');
    const makeTwtList = document.createElement('li');
    
    makeTwtList.innerHTML = '<span>' + form.username.value + '</span>' + ": " + form.tweet.value;
    
    makeTwtList.style.listStyle = 'none';
    tweetTxt.appendChild(makeTwtList);
    const userName = document.querySelector('span');
    userName.style.fontStyle = 'italic';

});