var app = new Vue({
    el: '#app',
    data: {
        expr: '',
        result: 0,
        historic: []
    },
    methods: {
        calculate: function (){
            this.result = math.eval(this.expr)
            this.historic.push({calcul:this.expr, result:this.result})
        }
    }
})
