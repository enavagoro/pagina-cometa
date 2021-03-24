/*     NavBar      */

var app = new Vue({
    el: '#navBar',
    data: {
        message: 'Testeo de Pana!'
    }
});


/*      Home        */

var app = new Vue({
    el: '#home',
    data: {
        message: 'Este es el home donde está el pajarito'
    }
});


/*      Services        */

var app = new Vue({
    el: '#services',
    data: {
        services: [{name:'Asesorías y Desarrollo de Estudios Ambientales',img:['./img/hormiga.jpg','./img/hormiga.jpg','./img/hormiga.jpg']},
                   {name:'Certificaciones Internacionales',img:['./img/certificados.jpg']},
                   {name:'Transferencia Tecnológica en TICS',img:['./img/campo.jpg']}],
        message: 'Aquí es donde están los servicios'
    }
});


/*      MisionAndVision        */

var app = new Vue({
    el: '#mision',
    data: {
        message: 'Aquí es donde está la misión y visión'
    }
});


/*     SliderBirds       */

var app = new Vue({
    el: '#sliderBirds',
    data: {
        message: 'Aquí es donde está el slider de pájaros',
        birds: [
        {name:'Luz Marina Vergara Pulgarín',rol:'Directora Ejecutiva',img:['./img/marina.jpg']},
        {name:'Lina María Rendón Cardona',rol:'Técnica Operativa',img:['./img/lina.jpg']},
        {name:'Judy Marcela Osorio Quintero',rol:'Técnica Operativa',img:['./img/judy.jpg']},
        {name:'Giovanni Rodriguez Román',rol:'Técnico Operativo',img:['./img/giovanni.jpg']},
        {name:'Adriana María Vergara Pulgarín',rol:'Auxiliar Administrativa',img:['./img/adriana.jpg']}],
    }
});


/*     Blog       */

var app = new Vue({
    el: '#blog',
    data: {
        message: 'Aquí es donde está el BLOG pero eso es en una iteración futura'
    }
});


/*     Footer       */

var app = new Vue({
    el: '#footer',
    data: {
        message: 'Aquí es donde está el footer'
    }
});