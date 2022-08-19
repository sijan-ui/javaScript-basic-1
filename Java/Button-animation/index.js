let len = document.querySelectorAll('.button').length;
for( let i = 0; i < len; i ++){
    let button = document.querySelectorAll('.button')[i];
    button.addEventListener('click', function(){ 
        button.classList.add('anim');
            setTimeout(function(){
                button.classList.remove('anim');
            }, 1000);
    })    
};