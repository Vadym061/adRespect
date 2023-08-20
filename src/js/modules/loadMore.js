export function loadMore (){
    let btnLoadMore = document.querySelector(".btn-load");
    const galleryHide = document.querySelectorAll('.grid-item-hide');
    const timer = 2000;

    btnLoadMore.addEventListener('click', ()=>{
        const load = document.querySelector(".loading")
        btnLoadMore.style.display = "none";
        load.style.display = "block"
    
    setTimeout(()=>{
        galleryHide.forEach(item => {
        item.style.display = "flex";
        });
            
        var elem = document.querySelector('.grid');
        var msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        gutter: 43,
        fitWidth: true
        });
     
            
        load.style.display = "none";
    }, timer);
    });
}