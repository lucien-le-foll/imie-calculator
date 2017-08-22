var app = new Vue({
    el: '#app',
    data: {
        expr: '',
        result: 0,
        historic: [],
        inputs: [
            [7, 8, 9],
            [4, 5, 6],
            [1, 2, 3],
            ['+', 0, '-'],
            ['*', '/', '^']
        ]
    },
    methods: {
        calculate: function (){
            this.result = math.eval(this.expr)
            this.historic.unshift({calcul:this.expr, result:this.result})
        },
        append: function(input){
            this.expr += input
        }
    }
})

Vue.config.devtools = true



