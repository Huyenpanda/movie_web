let searchBtn = document.querySelector('#search-btn');
// let searchBar = document.querySelector('.search-bar-container');
// let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let videoSlider = document.querySelector('#video-slider');
// let phimDienAnhLink = document.querySelector('a[href="#Phimdienanh"]');

// window.onscroll = () => {
//   searchBtn.classList.remove('fa-times');
//   searchBar.classList.remove('active');
//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');
//   loginForm.classList.remove('active');
// }

// menu.addEventListener('click', () => {
//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');
// });

// searchBtn.addEventListener('click', () => {
//   searchBtn.classList.toggle('fa-times');
//   searchBar.classList.toggle('active');
// });

// formBtn.addEventListener('click', () => {
//   loginForm.classList.add('active');
// });

// formClose.addEventListener('click', () => {
//   loginForm.classList.remove('active');
// });
// phimDienAnhLink.addEventListener('click', () => {
//   // Xóa class 'active' khỏi các section hiện tại
//   document.querySelector('.home.active').classList.remove('active');
//   document.querySelector('.Phimdienanh.active').classList.remove('active');

//   // Thêm class 'active' cho cả home và Phimdienanh
//   document.getElementById('home').classList.add('active');
//   document.getElementById('Phimdienanh').classList.add('active');
// });
videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    videoSlider.src = src;
    videoSlider.load();
    videoSlider.play();
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

for (var i = 0; i < Phimdienanh1.length; i++) {
  // Tạo phần tử div.box
  const boxDiv = document.createElement("div");
  boxDiv.classList.add("box");

  // Tạo phần tử hình ảnh
  const img = document.createElement("img");
  img.src = linkList['link_img'][Phimdienanh1[i]];
  img.alt = "";

  // Tạo phần tử div.content
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  // Tạo phần tử h3
  const h3 = document.createElement("h3");
  h3.textContent = linkList['name'][Phimdienanh1[i]];

  // Tạo phần tử h1
  const h1 = document.createElement("h1");
  h1.textContent = "Vô vàn bộ phim hay, kịch tích, gay cấn, đang chờ bạn!";

  // Tạo phần tử a
  const link = document.createElement("a");
  link.href = "#";
  link.classList.add("btn");
  link.textContent = "see more";

  // Gắn các phần tử con vào div.content
  contentDiv.appendChild(h3);
  contentDiv.appendChild(h1);
  contentDiv.appendChild(link);

  // Gắn hình ảnh và div.content vào div.box
  boxDiv.appendChild(img);
  boxDiv.appendChild(contentDiv);

  // Gắn div.box vào một phần tử cha (ví dụ: body)
  document.getElementsByClassName('box-container')[0].appendChild(boxDiv);

}