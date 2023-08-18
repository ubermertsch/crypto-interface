
const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});





const menuBar = document.querySelector('.interface nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

// search button için js
const searchBtn = document.querySelector('.interface nav form .form-input button');
const searchBtnIcon = document.querySelector('.interface nav form .form-input button .bx');
const searchForm = document.querySelector('.interface nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});



// karanlık mod yapmak için js

 const toggler = document.getElementById('theme-toggle');

 toggler.addEventListener('change', function () {
  if (this.checked) {
      document.body.classList.add('dark');
      } else {
       document.body.classList.remove('dark');
    }
    });

// contentlerin çakışmaması için
function showContent(contentId) {
    //var content = document.getElementById(contentId);      sidebar background rengi #383849
    var contents = document.getElementsByClassName('content');
    
    
    for (var i = 0; i < contents.length; i++) {
      if (contents[i].id === contentId) {
        contents[i].style.display = 'block';
      } else {
        contents[i].style.display = 'none';
      }
    }
  }
  // logout yapmak ister misiniiz tuşları



  //bu dropdown 
    function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active')
    }
   

 /*
    // coingecko api https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(res => res.json())
    .then(json => {
        const container = document.querySelector('.container');
        const coins = Object.getOwnPropertyNames(json);

        for (let coin of coins) {
            const coinInfo = json[`${coin}`];
            const price = coinInfo.current_price;
            const change = coinInfo.price_change_24h.toFixed(5);
            const images = coinInfo.image;

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="${images}">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>/USD</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
        `;
        }
    });*/



    $(document).ready(function(){
        var xhr =null;
    if(window.XMLHttpRequest){
        xhr = window.XMLHttpRequest;
    }else{
        xhr = window.ActiveXObject('Microsoft.XMLHTTP');
    }
        
        $('#mertGrid').DataTable({
            stateSave:true,
                ajax: {
                    type: 'GET',
                    url:'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en',
                    dataSrc: '',
                    headers: {
                    'X-Requested-With': 'XMLHttpRequest'},
                    crossDomain: true,
                    dataType:'json',
                    contentType: 'application/json; charset=utf-8',
                },
                columns: [
                    {data:'image',render: function (data, type, row, meta) {
                        return '<img src="' + data + '" width="50"/>';
                        }
                    },
                    {data:'market_cap_rank'},
                    {data:'name'},
                    {data:'current_price'},
                    {data:'price_change_24h'}
                ]
            });
    
    
    });




    // buradaki converter için bir denemedir artık
          const amountInput = document.querySelector('#amount');
          const fromCurrencySelect = document.querySelector('#fromCurrency');
          const toCurrencySelect = document.querySelector('#toCurrency');
          const convertButton = document.querySelector('#convert');
          const resultParagraph = document.querySelector('#result');
          
          convertButton.addEventListener('click', () => {
          const amount = amountInput.value;
          const fromCurrency = fromCurrencySelect.value;
          const toCurrency = toCurrencySelect.value;
          const apiKey = "685419b6bedfb725bb6af07ed3dd6fef8f20a83f05c066d1eb20a10c563c7801";
          const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${toCurrency}&tsyms=${fromCurrency}&api_key=${apiKey}`;
        
          fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              const rate = data[fromCurrency];
              const result = amount / rate;
        
              resultParagraph.innerHTML = `${amount} ${fromCurrency} = ${result.toFixed(3)} ${toCurrency}`;
            })
            .catch(error => {
              resultParagraph.innerHTML = "Error: Unable to fetch exchange rate.";
              console.error(error);
            });
        });

     // converterdaki değişebilir değerler 
     function swapSelectContents() {
        const select1 = document.getElementById("fromCurrency");
        const select2 = document.getElementById("toCurrency");
      
        const fromCurrencOptions = Array.from(fromCurrency.options);
        const toCurrencyOptions = Array.from(toCurrency.options);
      
        fromCurrency.innerHTML = "";
        toCurrency.innerHTML = "";
      
        fromCurrencOptions.forEach(option => toCurrency.appendChild(option.cloneNode(true)));
        toCurrencyOptions.forEach(option => fromCurrency.appendChild(option.cloneNode(true)));
      }
      
      // CONVERTER SEARCH BOX 
    