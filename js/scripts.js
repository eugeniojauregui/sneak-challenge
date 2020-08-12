// Datos iniciales
let works = '{  "works": [{      "title": "Creative Logo",      "category": "branding",      "image": "img/works/logo1.jpg"  }, {      "title": "Creative Web",      "category": "web",      "image": "img/works/web1.jpg"  }, {      "title": "Creative Photo",      "category": "photography",      "image": "img/works/photo1.jpg"  }, {      "title": "Creative App",      "category": "app",      "image": "img/works/app1.jpg"  }, {      "title": "Creative Logo",      "category": "branding",      "image": "img/works/logo2.jpg"  }, {      "title": "Creative Web",      "category": "web",      "image": "img/works/web2.jpg"  }, {      "title": "Creative Photo",      "category": "photography",      "image": "img/works/photo2.jpg"  }, {      "title": "Creative App",      "category": "app",      "image": "img/works/app2.jpg"  }, {      "title": "Creative Logo",      "category": "branding",      "image": "img/works/logo3.jpg"  }, {      "title": "Creative Web",      "category": "web",      "image": "img/works/web3.jpg"  }, {      "title": "Creative Photo",      "category": "photography",      "image": "img/works/photo3.jpg"  }, {      "title": "Creative App",      "category": "app",      "image": "img/works/app3.jpg"  }]}';
var myWorks = JSON.parse(works);
console.log(myWorks)
// Busco la lista vacía
let mainListNode = document.getElementById('masonry-with-columns')

// Declaro la variable en la cual voy a ir guardando los nodos li
let liNode

// Recorro el array
for (let i = 0; i < myWorks.works.length; i++) {
  //Listo trabajos
  var work = myWorks.works[i];
  // Creo el nodo li
  liNode = document.createElement('li')

  // Le agrego su texto interno
  liNode.innerHTML = '<img src="' + work.image + '" alt="' + work.title + '"/>';
  liNode.innerHTML += '<div class="overlay"><div class="work-info"><h3>' + work.title + '</h3><p>' + work.category + '</p></div></div>';

  // Le setteo la clase 'list-group-item'
  liNode.className = 'list-group-item'

  // Le setteo la clase 'list-group-item'
  let cat = work.category
  liNode.setAttribute('data-cat', cat)

  // Agrego el nodo al final de la lista
  mainListNode.appendChild(liNode)
}

//Cambio el layout de los trabajos
let layout = document.querySelectorAll('.layout li')

let masonry = document.getElementById('block')
masonry.onclick = changeLayout
let row = document.getElementById('row')
row.onclick = changeLayout

function changeLayout() {
  [].forEach.call(layout, function (lay) {
    lay.classList.remove("active");
  });
  if (mainListNode.classList.contains('row')) {
    mainListNode.classList.remove('row')
    masonry.classList.add('active')
  } else {
    mainListNode.classList.add('row')
    row.classList.add('active')
  }
}


