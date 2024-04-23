var yuxarı = document.getElementsByClassName("yuxarı_çıx")[0];
var məlumat = document.getElementsByClassName("məlumat")[0]
// console.log(yuxarı);

// console.log(window);
window.addEventListener("scroll", function () {
    const məsafə = window.scrollY; // Yuxarıdan olan uzağlığı (məsafəni) verir
    // console.log(məsafə);

    if (məsafə > 800) {
        yuxarı.classList.add("göstər")
        məlumat.classList.remove("məlumat")


    }
    else {
        yuxarı.classList.remove("göstər")
        məlumat.classList.add("məlumat")
    }
})

yuxarı.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

yuxarı.addEventListener("mousemove", function () {
    yuxarı.innerHTML = "&uArr;";
})

yuxarı.addEventListener("mouseout", function () {
    yuxarı.innerHTML = "TOP";
})