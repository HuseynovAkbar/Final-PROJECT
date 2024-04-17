

const search = () => {
    const input = document.querySelector('#search-item')
    input.addEventListener('keyup', () => {
        const searchbox = document.getElementById('search-item').value.toUpperCase().replaceAll(" ", "");
        const product = document.getElementsByClassName('h1-seach-for')
        for (let i = 0; i < product.length; i++) {
            const element = product[i].innerHTML.toUpperCase();
            if (element.includes(searchbox)) {
                product[i].style.display = 'block'
            } else {
                product[i].style.display = 'none'
            }

        }

    })
}





const buttonAsia = document.querySelector(".button-Asia");
const asia = [...document.getElementsByClassName("asia")];


const buttonEurope = document.querySelector(".button-Europe");
const europe = [...document.getElementsByClassName("europe")];


const buttonAfrica = document.querySelector(".button-Africa");
const africa = [...document.getElementsByClassName("africa")];



const buttonAmerica = document.querySelector(".button-America");
const america = [...document.getElementsByClassName("america")];

a = 1;
b = 1;
c = 1;
d = 1;

buttonAsia.addEventListener("click", () => {
    if (a == 1) {
        europe.forEach(eu => {
            eu.style.display = "none"
        });

        africa.forEach(af => {
            af.style.display = "none"
        });

        america.forEach(am => {
            am.style.display = "none"
        });


        asia.forEach(as => {
            as.style.display = "block"
        });


        buttonAsia.style.background = "#12f7ff"
        buttonAsia.style.color = "black"

        buttonEurope.style.background = "transparent"
        buttonEurope.style.color = "white"

        buttonAfrica.style.background = "transparent"
        buttonAfrica.style.color = "white"



        buttonAmerica.style.background = "transparent"
        buttonAmerica.style.color = "white"


        a--;
        if (b == 0) {
            b++;
        }

        if (c == 0) {
            c++;
        }


        if (d == 0) {
            d++;
        }
    }
    else {


        europe.forEach(eu => {
            eu.style.display = "block"
        });

        africa.forEach(af => {
            af.style.display = "block"
        });

        america.forEach(am => {
            am.style.display = "block"
        });


        buttonAsia.style.background = "transparent"
        buttonAsia.style.color = "white"
        a++;

    }

})


buttonEurope.addEventListener("click", () => {

    if (b == 1) {
        asia.forEach(as => {
            as.style.display = "none"
        });

        africa.forEach(af => {
            af.style.display = "none"
        });

        america.forEach(am => {
            am.style.display = "none"
        });


        europe.forEach(eu => {
            eu.style.display = "block"
        });


        buttonEurope.style.background = "#12f7ff"
        buttonEurope.style.color = "black"

        buttonAsia.style.background = "transparent"
        buttonAsia.style.color = "white"

        buttonAfrica.style.background = "transparent"
        buttonAfrica.style.color = "white"


        buttonAmerica.style.background = "transparent"
        buttonAmerica.style.color = "white"

        b--;
        if (a == 0) {
            a++;
        }

        if (c == 0) {
            c++;
        }

        if (d == 0) {
            d++;
        }

    }
    else {


        asia.forEach(as => {
            as.style.display = "block"
        });

        africa.forEach(af => {
            af.style.display = "block"
        });

        america.forEach(am => {
            am.style.display = "block"
        });


        buttonEurope.style.background = "transparent"
        buttonEurope.style.color = "white"
        b++;
    }
})








buttonAfrica.addEventListener("click", () => {
    if (c == 1) {
        europe.forEach(eu => {
            eu.style.display = "none"
        });

        asia.forEach(as => {
            as.style.display = "none"
        });

        america.forEach(am => {
            am.style.display = "none"
        });


        africa.forEach(af => {
            af.style.display = "block"
        });


        buttonAfrica.style.background = "#12f7ff"
        buttonAfrica.style.color = "black"

        buttonEurope.style.background = "transparent"
        buttonEurope.style.color = "white"

        buttonAsia.style.background = "transparent"
        buttonAsia.style.color = "white"


        buttonAmerica.style.background = "transparent"
        buttonAmerica.style.color = "white"

        c--;
        if (b == 0) {
            b++;
        }

        if (a == 0) {
            a++;
        }

        if (d == 0) {
            d++;
        }
    }
    else {


        europe.forEach(eu => {
            eu.style.display = "block"
        });

        asia.forEach(as => {
            as.style.display = "block"
        });

        america.forEach(am => {
            am.style.display = "block"
        });


        buttonAfrica.style.background = "transparent"
        buttonAfrica.style.color = "white"
        c++;

    }

})








buttonAmerica.addEventListener("click", () => {
    if (d == 1) {
        europe.forEach(eu => {
            eu.style.display = "none"
        });

        africa.forEach(af => {
            af.style.display = "none"
        });

        asia.forEach(as => {
            as.style.display = "none"
        });


        america.forEach(am => {
            am.style.display = "block"
        });


        buttonAmerica.style.background = "#12f7ff"
        buttonAmerica.style.color = "black"

        buttonEurope.style.background = "transparent"
        buttonEurope.style.color = "white"

        buttonAfrica.style.background = "transparent"
        buttonAfrica.style.color = "white"


        buttonAsia.style.background = "transparent"
        buttonAsia.style.color = "white"


        d--;
        if (b == 0) {
            b++;
        }

        if (c == 0) {
            c++;
        }

        if (a == 0) {
            a++;
        }
    }
    else {


        europe.forEach(eu => {
            eu.style.display = "block"
        });

        africa.forEach(af => {
            af.style.display = "block"
        });

        asia.forEach(as => {
            as.style.display = "block"
        });


        buttonAmerica.style.background = "transparent"
        buttonAmerica.style.color = "white"
        d++;

    }

})






// fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
