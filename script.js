window.onload = function () {
  $(".image-item").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    arrows: true,
    centerMode: true,
    draggable: false,
    slidesToShow: 4,
    prevArrow:
      '<button type="button" class="slick-custom-arrow slick-prev"><i class="bi bi-chevron-compact-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-custom-arrow slick-next"><i class="bi bi-chevron-compact-right"></i></button>',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: "unslick",
      },
    ],
  });
};
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const select = document.querySelector(".nice-select");
const select1 = document.querySelector(".nice-select1");
const select2 = document.querySelector(".nice-select2");
const select3 = document.querySelector(".nice-select3");
var list = document.querySelector(".list");
var list1 = document.querySelector(".list1");
var list2 = document.querySelector(".list2");
var list3 = document.querySelector(".list3");
var option = document.querySelectorAll(".option");
var option1 = document.querySelectorAll(".option1");
var option2 = document.querySelectorAll(".option2");
var option3 = document.querySelectorAll(".option3");
var current = document.querySelector(".current");
var current1 = document.querySelector(".current1");
var current2 = document.querySelector(".current2");
var current3 = document.querySelector(".current3");
var active = document.querySelector(".active");

// let images = Array.from(document.getElementsByClassName("imgCarousel"));

// let mainPhoto = document.getElementById("mainPhoto");

// function updateImage(event) {
//   let image = event.target;
//   mainPhoto.src = image.src;
// }

// images.forEach((image) => {
//   image.addEventListener("click", updateImage);
// });

// const select = Array.from(document.getElementsByClassName("nice-select"));
// const option = Array.from(document.getElementsByClassName("option"));

const fadeOut = () => {
  const loaderWrapper = document.querySelector(".wrapper");
  loaderWrapper.classList.add("fade");
};

window.addEventListener("load", fadeOut);

// function logTitle(event) {
//   const list = event.target.children[1];
//   list.classList.toggle("active");
// }

// select.forEach((select) => {
//   select.addEventListener("click", logTitle);
// });

// function ChangeTitle(e) {
//   const text = e.target.innerText;
//   const title = document.querySelector(".current");
//   if ((text = "Category")) {
//     title.innerText = text;
//   }

// const newTitile =
//   e.target.parentElement.parentNode.firstElementChild.innerText;
// newTitile.innerText = text;
// }

// option.forEach((option) => {
//   option.addEventListener("click", ChangeTitle);
// });

NodeList.prototype.addEventListener = function (
  event_name,
  callback,
  useCapture
) {
  for (var i = 0; i < this.length; i++) {
    this[i].addEventListener(event_name, callback, useCapture);
  }
};

// Open and close filter category
if (select) {
  select.addEventListener("click", () => {
    list.classList.toggle("active");
    select.classList.toggle("rotate");
  });
}

option.addEventListener("click", (e) => {
  const newTitle = e.target.innerText;
  current.innerText = newTitle;
});

document.onclick = function (e) {
  if (
    e.target != select &&
    e.target != select1 &&
    e.target != select2 &&
    e.target != select3 &&
    e.target.classList != "option" &&
    e.target.classList != "option1" &&
    e.target.classList != "option2" &&
    e.target.classList != "option3"
  ) {
    list.classList.remove("active");
    list1.classList.remove("active");
    list2.classList.remove("active");
    list3.classList.remove("active");
  }
};

// Open and close filter Type
if (select1) {
  select1.addEventListener("click", () => {
    list1.classList.toggle("active");
    select1.classList.toggle("rotate");
  });
}

option1.addEventListener("click", (e) => {
  const newTitle = e.target.innerText;
  current1.innerText = newTitle;
});

// Open and close filter Size
if (select2) {
  select2.addEventListener("click", () => {
    list2.classList.toggle("active");
    select2.classList.toggle("rotate");
  });
}

option2.addEventListener("click", (e) => {
  const newTitle = e.target.innerText;
  current2.innerText = newTitle;
});

// Open and close filter Color
if (select3) {
  select3.addEventListener("click", () => {
    list3.classList.toggle("active");
    select3.classList.toggle("rotate");
  });
}

option3.addEventListener("click", (e) => {
  const newTitle = e.target.innerText;
  current3.innerText = newTitle;
});

// Open and close bar

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.remove("active");
  });
}
