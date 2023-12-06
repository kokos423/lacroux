//#features
//featurenaslov
var featurenaslov1 = "Steak with Espagnole Sauce"
var featurenaslov2 = "French Toast with Fruit"
var featurenaslov3 = "Vela Dora Dessert"
let featurenaslovi = ["corak",featurenaslov1, featurenaslov2, featurenaslov3]
///featuretekst
var featuretekst1 = "A thick cut of meat, supplemented with a bitter dark sauce, grilled mushrooms and cucumber"
var featuretekst2 = "French Toast with organic Summer Fruits"
var featuretekst3 = "Fluffy rolled pancakes with dark chocolate drizzle and citrus fruits."
let featuretekst = ["corak",featuretekst1, featuretekst2, featuretekst3]


var feature = '<div class="container"><div class="section-title"><h2>Our Specials</h2></div><div class="row">';
function napravifeatures(){
    for(var i=1; i<4; i++){
        feature += '<div class="col-xs-12 col-sm-4"><div class="features-item"><h3>'+featurenaslovi[i]+'</h3><img src="img/specials/'+i+'.jpg" class="img-responsive" alt="slika'+i+'"><p>'+featuretekst[i]+'</p></div></div>'
    }
}
napravifeatures();
feature += '</div></div>'

document.getElementById("features").innerHTML = feature;

//#restaurant-menu

//vreme
let trenutnovreme = new Date().getHours();
console.log(trenutnovreme);

//jela i pica
var menitekstjela = '<div class="menu-section"><h2 class="menu-section-title">Meals</h2>'
var menitekstpica = '<div class="menu-section"><h2 class="menu-section-title">Drinks</h2>'
var jela = [
    {
        name: 'Croissant au Saumon Fumé',
        description: 'Delicate smoked salmon enveloped in a flaky croissant.'
    },
    {
        name: 'Omelette Truffée',
        description: 'Velvety truffle-infused omelette, a luxurious harmony of eggs.'
    },
    {
        name: 'Pain Perdu aux Framboises',
        description: 'Decadent French toast adorned with luscious raspberries.'
    },
    {
        name: 'Salade Niçoise au Thon Frais',
        description: 'Classic quiche with savory bacon, gruyere cheese, and a side of mixed greens.'
    },
    {
        name: 'Tartine au Chèvre et Figues',
        description: 'Toasted artisanal bread with creamy goat cheese, figs, and a drizzle of honey.'
    },
    {
        name: 'Pain Perdu aux Framboises',
        description: 'Toasted artisanal bread with creamy goat cheese, figs, and a drizzle of honey.'
    },
    {
        name: 'Crème Brûlée aux Baies Rouges',
        description: 'Decadent French toast adorned with luscious raspberries.'
    },
    {
        name: 'Tarte au Chocolat Noir et Framboises',
        description: 'Decadent French toast adorned with luscious raspberries.'
    },
    {
        name: 'Bouillabaisse Toasts',
        description: 'Toasted baguette slices topped with a rich seafood bouillabaisse, a hearty remedy.'
    }
];

var pica =[
    {
        name: 'Café au Lait Praliné',
        description: 'Smooth espresso infused with hazelnut praline, topped with velvety steamed milk.'
    },
    {
        name: 'Thé des Jardins',
        description: 'A fragrant blend of Darjeeling and rose petals, a floral symphony in a teacup.'
    },
    {
        name: 'Cappuccino à la Vanille',
        description: 'Rich espresso crowned with frothy milk and a touch of Madagascar vanilla.'
    },
    {
        name: 'Vin Blanc: Sancerre',
        description: 'A crisp, elegant white wine with citrus notes, perfect for seafood dishes.'
    },
    {
        name: 'Citron Pressé',
        description: 'Freshly squeezed lemonade, a zesty and refreshing accompaniment.'
    },
    {
        name: 'Champagne Rosé',
        description: 'Delicate bubbles of rosé champagne, adding a touch of celebration to any meal.'
    },
    {
        name: 'French 75',
        description: 'Gin, champagne, fresh lemon juice, and a hint of simple syrup—effervescent and timeless.'
    },
    {
        name: 'Espresso Martini à la Française',
        description: 'Vodka, coffee liqueur, freshly brewed espresso, and a touch of vanilla.'
    },
    {
        name: 'Basil Fizz',
        description: 'Gin, fresh basil, lemon juice, simple syrup, and a splash of soda—herbal and invigorating.'
    }
];

//kreiranje meni-ja
function satnimeni(){
    for(var i=0; i<3; i++){
    if(trenutnovreme >= 6 && trenutnovreme <= 1){
       menitekstjela += '<div class="menu-item"><div class="menu-item-name">'+jela[i].name+'</div><div class="menu-item-price"> '+(i + 5)+' </div><div class="menu-item-description">'+jela[i].description+'</div></div>';
       menitekstpica += '<div class="menu-item"><div class="menu-item-name">'+pica[i].name+'</div><div class="menu-item-price"> '+(i + 5)+' </div><div class="menu-item-description">'+pica[i].description+'</div></div>';
    }
    else if (trenutnovreme >= 13 && trenutnovreme <= 20){
        menitekstjela += '<div class="menu-item"><div class="menu-item-name">'+jela[i+3].name+'</div><div class="menu-item-price"> '+(i + 9)+' </div><div class="menu-item-description">'+jela[i+3].description+' </div></div>';
        menitekstpica += '<div class="menu-item"><div class="menu-item-name">'+pica[i+3].name+'</div><div class="menu-item-price"> '+(i + 9)+' </div><div class="menu-item-description">'+pica[i+3].description+'</div></div>';


    }
    else{
        menitekstjela += '<div class="menu-item"><div class="menu-item-name">'+jela[i+6].name+'</div><div class="menu-item-price">'+(i + 14)+' </div><div class="menu-item-description"> '+jela[i+6].description+'</div></div>';
        menitekstpica += '<div class="menu-item"><div class="menu-item-name">'+pica[i+6].name+'</div><div class="menu-item-price"> '+(i + 14)+' </div><div class="menu-item-description">'+pica[i+6].description+'</div></div>';

    }
    }
}
satnimeni();
menitekstjela += '</div>';
menitekstpica += '</div>';

document.getElementById("jela").innerHTML = menitekstjela;
document.getElementById("pica").innerHTML = menitekstpica;

//forma
var dugmesubmit = document.querySelector("#submit");
dugmesubmit.addEventListener("click", provera);

/*var brojljudi = '<select name="brojljudi2" id="brojljudi2">'
function brojljudiselect(){
    for(var i=4; i<=7; i++){
    brojljudi += '<option value="'+i+'">'+i+'</option>'
}
}
brojljudiselect();
brojljudi += '</select>'
document.getElementById("brojljudi").innerHTML = brojljudi;*/

//regex
function provera(){
    var greskabrojac;
    let ime, prezime, email;
    ime = document.querySelector("#ime");
    prezime = document.querySelector("#prezime");
    email = document.querySelector("#email");
    brojljudi = document.querySelector("#brojljudi");
    proslava = document.querySelector("#vrstaproslave");

    const regimeprezime = /^[A-Z][a-z]{3,20}(\s[A-Z][a-z]{3,20})+$/;
    if(!regimeprezime.test(ime.value) && ime.value.length >= 3){
        console.log("radi");
    } else{
        console.log("neradi")
    }
}





