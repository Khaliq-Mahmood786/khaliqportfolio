$(Document).ready(function()
{
let hemberger=document.querySelector('.hemberger');
let times=document.querySelector('.times');
let MObileNav=document.querySelector('.mobile-nav');

hemberger.addEventListener('click',function(){
    MObileNav.classList.add('open');

    })
    times.addEventListener('click',function(){
        MObileNav.classList.remove('open');
    })


});
