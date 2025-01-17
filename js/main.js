const body = document.querySelector('body')
const btnChangeTheme = document.querySelector('.btn-toggle-theme')
const myPhoto = document.querySelector('.hero-img')
const myName = document.querySelector('.hero__title')
const iAm = document.querySelector('.hero-title-hello')
const heroTopBlock = document.querySelector('.hero__top-block')
const myProfession = document.querySelector('.hero-profession')
const myDescription = document.querySelector('.hero-description')
const myProfessionSecond = document.getElementById("hero-profession-2")
const myDescriptionSecond = document.getElementById("hero-description-2")



const interactiveScale = document.querySelectorAll(".interactive-block")

const links = document.querySelectorAll(".nav a")

links.forEach( link => {
  link.addEventListener('click', function (event) {
    event.preventDefault()
    
    setTimeout(() => location.href = link.href, 1)
  })
})

// links.addEventListener('click', function () {
//   setTimeout(() => {
//     console.log('window.location');
//     window.location = "#cases"
  
//   }, 1000)
  
// })

// const linkFooter = document.getElementById("linkFooter")

// linkFooter.addEventListener('click', function (event) {
//   event.preventDefault()
  

//   setTimeout(() => location.href = linkFooter.href, 1000)
// })





//кнопка смены темы
btnChangeTheme.addEventListener('click', function () {
  //Логика кнопки такова: 
  // 1.Если body НЕ содержит классы bg-green bg-blue, мы добавляем класс bg-green и white-text для нужных элементов
  // 2.Если body содержит класс bg-green, мы добавляем класс bg-blue и удаляем класс bg-green
  // 3.Если body содержит класс bg-blue, мы удаляем класс bg-blue и тема возвращается в первое цветовое решение
  if (!body.classList.contains('bg-green') && !body.classList.contains('bg-blue')) {
    body.classList.add('bg-green')
    document.documentElement.style.setProperty('--color-main', '#FFFFFF');
    document.documentElement.style.setProperty('--color-title', '#F79C00');
    document.documentElement.style.setProperty('--color-body-for-media', '#036635');
    document.documentElement.style.setProperty('--colour-for-button-1', 'rgba(255,0,0,1)');
    document.documentElement.style.setProperty('--colour-for-button-2', 'rgba(63,87,147,1)');
    document.documentElement.style.setProperty('--colour-for-button-3', 'rgba(35,35,35,1)');
  } else if (body.classList.contains('bg-green')) {
    body.classList.add('bg-blue')
    body.classList.remove('bg-green')
    document.documentElement.style.setProperty('--color-title', '#FEEC48');
    document.documentElement.style.setProperty('--color-body-for-media', '#3F5793');
    document.documentElement.style.setProperty('--colour-for-button-1', 'rgba(3,102,53,1)');
    document.documentElement.style.setProperty('--colour-for-button-2', 'rgba(255,0,40,0.9)');
    document.documentElement.style.setProperty('--colour-for-button-3', 'rgba(35,35,35,1)');
  } else if (body.classList.contains('bg-blue')) {
    body.classList.remove('bg-blue')
    myName.classList.remove('white-text')
    document.documentElement.style.setProperty('--color-main', '#EBE3CE');
    document.documentElement.style.setProperty('--color-title', '#EAC566');
    document.documentElement.style.setProperty('--color-body-for-media', '#232323');
    document.documentElement.style.setProperty('--colour-for-button-1', 'rgba(3,102,53,1)');
    document.documentElement.style.setProperty('--colour-for-button-2', 'rgba(63,87,147,1)');
    document.documentElement.style.setProperty('--colour-for-button-3', 'rgba(255,0,0,0.9)');

  }


})

// --------------------------оптимизировать этот код в будующем. ---------------
function changeJob() {
  if (!myProfession) return;
  else {
    myProfession.addEventListener('click', function () {
      console.log('ssss');
      myProfession.classList.toggle('active')
      myProfessionSecond.classList.toggle('active')
      myDescription.classList.toggle('active')
      myDescriptionSecond.classList.toggle('active')
    })

    myProfessionSecond.addEventListener('click', function () {
      console.log('ssss');
      myProfession.classList.toggle('active')
      myProfessionSecond.classList.toggle('active')
      myDescription.classList.toggle('active')
      myDescriptionSecond.classList.toggle('active')
    })
  }
}

changeJob()


// --------------------------оптимизировать этот код в будующем. ---------------

const addClass = setTimeout(() => {
  myPhoto.classList.add('moved')
  myName.classList.add('moved')
  iAm.classList.add('disappeared')
  heroTopBlock.classList.add('centered')
  myDescription.classList.add('disappeared')

}, 1000)


const removeCLass = setTimeout(() => {
  myPhoto.classList.remove('moved')
  myName.classList.remove('moved')
  iAm.classList.remove('disappeared')
  heroTopBlock.classList.remove('centered')

}, 3500)

const removeCLassDescription = setTimeout(() => {
  myDescription.classList.remove('disappeared')

}, 3750)


const changeCLassActive = setTimeout(() => {
  if (myProfession.classList.contains('active')) {
    myProfession.classList.toggle('active')
    myProfessionSecond.classList.toggle('active')
    myDescription.classList.toggle('active')
    myDescriptionSecond.classList.toggle('active')
  }

}, 5500)

// Jquary-block---------------------------------------------

$(document).ready(function () {
  $(".photoshoper-slider").slick({
    infinity: true,
    autoplay: false,
    autoplaySpeed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $(".my-benefits-slider").slick({
    infinity: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.super-team-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        variableWidth: false,
        dots: true
      }
    },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        infinite: true,
        variableWidth: false,
        dots: true
        }
      }
    ]
  })

  $('.burger-menu').click(function () {
    $('.burger-menu span').toggleClass('active')
    $('.nav').toggleClass('active')
    $('body').toggleClass('hidden')
  })

 


  $('.nav a').click(function () {
    $('.burger-menu span').removeClass('active')
    $('.nav').removeClass('active')
    $('body').removeClass('hidden')
  })
});

// Jquary-block--end----------------------------------------


// интерактивный блок
interactiveScale.forEach(element => {
  element.addEventListener("click", function () {
    element.classList.remove("scale")
    this.classList.add("scale")


  })
});

// -----------------------------smooth-scrolling------------------------

// const links = document.querySelectorAll("a[href^='#'")

// const section = document.querySelectorAll("body section")

// links.forEach(link => {
// link.addEventListener('click', function(e) {
//   e.preventDefault()
//   let href = this.getAttribute('href').substring(1);
//   const scrollTarget = document.getElementById(href)
//   const topOfSet = document.querySelector(".menu").offsetHeight;
//   const positionElement = scrollTarget.getBoundingClientRect().top;
//   const offsetPosition = positionElement - topOfSet

//   window.scrollBy({
//     top: offsetPosition,
//     behavior: "smooth"
//   })
// })
// })


// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// };



// for(let i = 1; i < 100; ){
//     console.log(i);
//     continue;
//   }
//   for(let i = 1; ; i++){
//     console.log(i);
//     continue;
//   }