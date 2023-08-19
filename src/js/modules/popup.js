export function modal(){
    
    function formModal(){
        const btnModal = document.querySelectorAll('.btn2');
        const cancel = document.querySelector(".cancel");
        const modal = document.querySelector("#modal");
        btnModal.forEach((e)=>{
            e.addEventListener("click", ()=>{
                modal.style.display = 'flex'
            })
        })
        
        cancel.addEventListener("click", ()=>{
            modal.style.display = 'none';
        })
    }
    formModal();

}