const slider = document.querySelector('.slider');

const prices = document.querySelectorAll('.plan-price');

const togglePrices = ()=>{
    // console.log('slider clicked');
    if (slider.classList.contains('active')) {
        for(let i in prices){
            prices[i].innerHTML = '&dollar;'+ (199.99 + 50*i);
        }
        slider.classList.remove('active');
    }else {
        prices[0].innerHTML = "&dollar;19.99"
        prices[1].innerHTML = "&dollar;24.99"
        prices[2].innerHTML = "&dollar;39.99"
        slider.classList.add('active');
    }

}


slider.addEventListener('click',
togglePrices);
slider.addEventListener('keypress',
togglePrices);