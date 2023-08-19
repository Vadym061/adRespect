export function burgerMenu(){
    const headerBurgerMenuIcon = document.getElementById("hamburgerbtn");
    const burgerMenu = document.getElementById("mobileMenu");

    
    (function clickBurgerMenu() {
        headerBurgerMenuIcon.addEventListener("click", () => {
            headerBurgerMenuIcon.classList.toggle("select")
            if (headerBurgerMenuIcon.classList.contains("select")) {
              document.querySelector("#mobileMenu").classList.add("active")
             
            } else {
                document.querySelector("#mobileMenu").classList.remove("active")
            }
        })
    }());
    window.addEventListener("click", e => {
        const target = e.target
        if (!target.closest("#hamburgerbtn") && !target.closest("#mobileMenu")) {
            burgerMenu.classList.remove("active");
            headerBurgerMenuIcon.classList.remove("select");
        }
    });
}