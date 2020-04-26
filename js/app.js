$(document).ready(function(){
    function validate() {
        var spinner=document.getElementById('spinner');
        setTimeout(function(){
            spinner.style.display="none";
        }, 2500);
        return false;
      }
   
      function productCard(){
        let jsonPizzas = "https://raw.githubusercontent.com/aybaneze/DevPizza/gh-pages/json/product.json";
        $.ajax({
            url: jsonPizzas,
            context: document.body
          }).done(function(response) {
            var arrProduct = $.parseJSON(response);
            for(let i=0;i<arrProduct.length;i++){
              
                let html=`
                        <div class="product" id="${arrProduct[i].id}">
                            <img class="product-img" src="https://raw.githubusercontent.com/aybaneze/DevPizza/gh-pages${arrProduct[i].image}">
                                <div class="product-contenido">
                                    <h3 class="product-nombre">${arrProduct[i].nombre}</h3>
                                    <p class="product-descripcion">${arrProduct[i].descripcion}</p>
                                    <p class="product-precio">${arrProduct[i].precio}</p>
                                </div>
                                <div class="product-button">
                                    <button>AGREGAR</button>
                                </div>
                        </div>
                    `
                    $(".content__product .products").append(html);
            }


          });
      }
  
      
      validate();
      productCard();
})

    // 
// function cargarPortafolio(){
//     fetch('datos.json')
//     .then( (respuesta) => {
//         return respuesta.json();
//     })
//     .then((datos) =>{
//         let html='';
//         datos.portafolio.forEach(portafolio => {
//             html += `
//                     <div class="elemento">
//                         <img src="img/${portafolio.id}.jpg">
//                         <div class="contenido">
//                             <h3>${portafolio.nombre}</h3>
//                             <p>${portafolio.desc}</p>
//                         </div>
//                     </div>
//             `;
//         });
//         document.querySelector('#listado').innerHTML = html;
//     })
// }


  