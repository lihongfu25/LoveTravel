const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//render web
// web 

const bestPackages = $('.best-package')
const lastMinutes = $('.last-minutes')

var web = {
    places: [
        {
          name: "Phoenix Town",
          tag: "phoenix-town",
          nation: "China",
          continents: 'Asia',
          price: "350",
          img: "./assets/img/Package/phoenix-town.png",
        },
        {
          name: "Berlin",
          tag: "berlin",
          nation: "Germany",
          continents: 'Europe',
          price: "700",
          img: "./assets/img/Package/berlin.jpg",
        },
        {
          name: "Victoria Harbor",
          tag: "hong-kong",
          nation: "Hong Kong",
          continents: "Asia",
          price: "500",
          img: "./assets/img/Package/hong-kong.jpg",
        },
        {
          name: "San Francisco",
          tag: "san-francisco",
          nation: "United States",
          continents: "Americas",
          price: "400",
          img: "./assets/img/Package/san-francisco.jpg",
        },
        {
          name: "Amsterdam",
          tag: "amsterdam",
          nation: "Netherlands",
          continents: "Europe",
          price: "1500",
          img: "./assets/img/Package/amsterdam.jpg",
        },
        {
          name: "Phuket",
          tag: "phuket",
          nation: "Thailand",
          continents: "Asia",
          price: "1200",
          img: "./assets/img/Package/phuket.jpg",
        },
        {
          name: "Co To",
          tag: "co-to",
          nation: "Vietnam",
          continents: "Asia",
          price: "500",
          img: "./assets/img/Package/coto-islands.jpg",
        },
        {
          name: "Hoi An",
          tag: "hoi-an",
          nation: "Vietnam",
          continents: "Asia",
          price: "600",
          img: "./assets/img/Package/hoian_old_town.jpg",
        }
    ],

    renderBarPlace: function(places) {
        var htmls = places.map(place => {
            return `<li class="bar__item">
                        <img class="place-img" src="${place.img}" alt="${place.name}">
                        <div class="place-infor">
                            <a href="#" class="place-name package" data-value="${place.tag}">${place.name}</a>
                            <a href="#" class="place-nation destinations" data-value="${place.tag}">
                                <i class="place-nation-icon fas fa-map-marker-alt"></i>
                                <p class="place-nation-name">${place.nation}</p>
                            </a>
                            <button class="btn size-s" style="margin-top: 15px; background-image: linear-gradient(to right, #ba71d8, #d9717c);">FROM ${place.price} $</button>
                        </div>       
                    </li>`
        })
        return htmls.join('')
    },

    handleRenderBarPlace: function() {

        // best package
        var bestPackagesArr = []
        for (let i = 0; i < 3; i++) {
            bestPackagesArr.push(this.places[i])
        }
        bestPackages.innerHTML = this.renderBarPlace(bestPackagesArr)

        // last minutes
        var lastMinutesArr = []
        for (let i = 3; i < 6; i++) {
            lastMinutesArr.push(this.places[i])
        }
        lastMinutes.innerHTML = this.renderBarPlace(lastMinutesArr)
    },

    start: function() {
        this.handleRenderBarPlace()
    }
}

web.start()


// go to btn
const logoBtn = $('.navbar__logo-img')
const destinationsBtns = $$('.destinations')


// go to function
function goToHome() {
    window.location.assign('http://localhost:5500')
}

// handle go to
logoBtn.onclick = this.goToHome

// menu bars
const menuBtn = $('.navbar__menu-bar-img')
const closeBtn = $('.bar-heading__close')

menuBtn.onclick = function() {
    $('.bar-options').style = 'transform: translateX(0); opacity: 1;'
}

closeBtn.onclick =function() {
  $('.bar-options').style = 'transform: translateX(100%); opacity: 0.7;'
}

for (let i = 0; i < destinationsBtns.length; i++) {
    let destinationsBtn = destinationsBtns[i]
    destinationsBtn.onclick = function() {
        console.log(this.dataset.value)
    }
}

// slide
var counter = 2
var manualBtns = $$('.manual-btn')

document.getElementById('slide_1').checked = true

for (let i = 0; i < manualBtns.length; i++) {
  let manualBtn = manualBtns[i]
  manualBtn.onclick = function() {
    counter = i+1
  }
}

setInterval(() => {
  document.getElementById('slide_' + counter).checked = true
  counter++
  if (counter > 4)
    counter = 1
}, 10000)

// sale on 

var packageImgSales = $$('.packages-sales')
var packagePrices = $$('.packages__price')
var dataValue

for (let i = 0; i < packageImgSales.length; i++) {
  let packageImgSale = packageImgSales[i]
  if (packageImgSale.classList.contains('enabled'))
    dataValue = packageImgSale.dataset.value
}

for (let i = 0; i < packagePrices.length; i++) {
  let packagePrice = packagePrices[i]
  if (packagePrice.dataset.value == dataValue)
    packagePrice.classList.add('sales')
}