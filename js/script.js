document.getElementsByClassName('next')[0].onclick = function(){
    const widthItem = document.querySelector('.top-menu-items').offsetWidth;
    document.getElementById('head-unit').scrollLeft += widthItem*2;
    console.log('next');
} 
document.getElementsByClassName('prev')[0].onclick = function(){
    const widthItem = document.querySelector('.top-menu-items').offsetWidth;
    document.getElementById('head-unit').scrollLeft -= widthItem*2;
    console.log('prev');
} 

document.getElementsByClassName('next-video')[0].onclick = function(){
    const widthItem = document.querySelector('.video').offsetWidth;
    document.getElementById('video-row-1').scrollLeft += widthItem+66;
    console.log('next');
} 
document.getElementsByClassName('prev-video')[0].onclick = function(){
    const widthItem = document.querySelector('.video').offsetWidth;
    document.getElementById('video-row-1').scrollLeft -= widthItem+66;
    console.log('prev');
} 

document.getElementsByClassName('next-video')[1].onclick = function(){
    const widthItem = document.querySelector('.artist').offsetWidth;
    document.getElementById('video-row-2').scrollLeft += widthItem+66;
    console.log('next 2');
} 
document.getElementsByClassName('prev-video')[1].onclick = function(){
    const widthItem = document.querySelector('.artist').offsetWidth;
    document.getElementById('video-row-2').scrollLeft -= widthItem+66;
    console.log('prev 2');
} 

document.getElementsByClassName('next-video')[2].onclick = function(){
    const widthItem = document.querySelector('.video').offsetWidth;
    document.getElementById('video-row-3').scrollLeft += widthItem+66;
    console.log('next 3');
} 
document.getElementsByClassName('prev-video')[2].onclick = function(){
    const widthItem = document.querySelector('.video').offsetWidth;
    document.getElementById('video-row-3').scrollLeft -= widthItem+66;
    console.log('prev 3');
}