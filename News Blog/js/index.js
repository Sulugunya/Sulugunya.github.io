$(function(){
    $(document).ready(function(){
        $.get(
            'http://data.fixer.io/api/latest',
            {'access_key': '523ad70b2f0e3829b5f5f8dfae5dacc8'},
            function(response){
                $('.rate-list').prepend(`
                    <li class="rate-item">EUR ${euroToRuble = response.rates.RUB.toFixed(2)} ₽</li>
                    <li class="rate-item">USD ${dollarToRuble = (euroToRuble / response.rates.USD).toFixed(2)} ₽</li>
                `);
            }
        );
        
    });
});