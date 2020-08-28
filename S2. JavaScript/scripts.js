const scripts = [
  // {url: '/scripts/app.js'},
  // {url: '/scripts/scope.js'},
  // {url: '/scripts/templatestring.js'},
  // {url: '/scripts/funciones.js'},
  // {url: '/scripts/func-parametros.js'},
  // {url: '/scripts/arrow-functions.js'},
  // {url: '/scripts/objetos.js'},
  // {url: '/scripts/object-literal.js'},
  // {url: '/scripts/desctructuring.js'},
  // {url: '/scripts/metodos-objeto.js'},
  // {url: '/scripts/arrays.js'}
  // {url: '/scripts/spreadoperator.js'}
  // {url: '/scripts/filter-find-reduce.js'}
  // {url: '/scripts/promises.js'}
  // {url: '/scripts/ajax-promises.js'}
  // {url: '/scripts/clases.js'}
]
scripts.forEach(element => {
  (function() {
    var script = document.createElement('script');
    script.src = element.url;
    document.body.appendChild(script)
  })();
});
