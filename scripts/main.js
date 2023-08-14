const buttonEl = document.querySelector('.button-for-cat');
const catImgEl = document.querySelector('.cat-img');

buttonEl.addEventListener('click', ()=>{
    catImgEl.style.display = 'block';
    catImgEl.style.zIndex = '1';
    catImgEl.style.transform = "translateY(-110px)";
    const rect = catImgEl.getBoundingClientRect();
    let absoluteTop = rect.top;
    let absoluteLeft = rect.left;
    console.log(absoluteTop,absoluteLeft)
})





