const productLink = document.getElementById("product-link");
const menuProduct = document.getElementById("menu-product");
const downArrows = document.querySelectorAll(".down-arrow");

const body = document.querySelector("body");

window.addEventListener("resize", updateArrowIcons);
updateArrowIcons();

function updateArrowIcons() {
  const arrowIcons = document.querySelectorAll(".down-arrow");
  const newIconSrc = "./images/icon-arrow-dark.svg";

  if (window.innerWidth < 800) {
    arrowIcons.forEach((arrow) => {
      arrow.src = newIconSrc;
    });
  } else {
    arrowIcons.forEach((arrow) => {
      arrow.src = "./images/icon-arrow-light.svg";
    });
  }
}

function arrows() {
    downArrows.forEach((arrow) => {
        arrow.classList.toggle("active");
    })
}



productLink.addEventListener("mouseover", function() {
    menuProduct.classList.toggle("active");
    body.addEventListener("click", function() {
        menuProduct.classList.remove("active");
    })
    downArrows.forEach((arrow) => {
        arrow.addEventListener("mouseover", function() {
                arrows();
        })
    
})
});

const companyLink = document.getElementById("company-link");
const menuCompany = document.getElementById("menu-company");

companyLink.addEventListener("mouseover", function() {
    menuCompany.classList.toggle("active");
    body.addEventListener("click", function() {
        menuCompany.classList.remove("active");
    })
    downArrows.forEach((arrow) => {
    arrow.addEventListener("mouseover", function() {
        arrows();
    })
    
})
});

const connectLink = document.getElementById("connect-link");
const menuConnect = document.getElementById("menu-connect");

connectLink.addEventListener("mouseover", function() {
    menuConnect.classList.toggle("active");
    body.addEventListener("click", function() {
        menuConnect.classList.remove("active");
    })
    downArrows.forEach((arrow) => {
    arrow.addEventListener("mouseover", function() {
        arrows();
    })
    
})
})

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const left = document.querySelector(".left");

openBtn.addEventListener("click", function(e) {
    e.target.classList.toggle("active");
    closeBtn.classList.toggle("active");
    document.querySelector(".header-container").classList.toggle("active");
})

closeBtn.addEventListener("click", function(e) {
    e.target.classList.toggle("active");
    openBtn.classList.toggle("active");
    document.querySelector(".header-container").classList.toggle("active");
})



if (window.innerWidth <= 800) {
    productLink.addEventListener("click", function() {
    if (document.querySelector("#menu-product").style.display === "none") {
        document.querySelector("#menu-product").style.display = "block";
    } else {
        document.querySelector("#menu-product").style.display = "none";
    }
    });

    companyLink.addEventListener("click", function() {
    if (menuCompany.style.display === "none" ) {
        menuCompany.style.display = "block";
    } else {
        menuCompany.style.display = "none";
    }
    });

    connectLink.addEventListener("click", function() {
    if (menuConnect.style.display === "none") {
        menuConnect.style.display = "block";
    } else {
        menuConnect.style.display = "none";
    }
    });

}