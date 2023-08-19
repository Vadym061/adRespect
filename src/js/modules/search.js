export function search(){
    let btn = document.querySelector('.button');
    let input = document.querySelector('.section-input');

    btn.addEventListener('click', ()=>{
       input.style.display = 'block';
    })


  
    window.addEventListener("click", e => {
        const target = e.target
        if (!target.closest(".button") && !target.closest(".section-input")) {
            input.style.display = 'none'
        }
    });
}