var app = new Vue({
    el: '#app',
    data: {
        expr: '',
        result: 0
    },
    methods: {
        calculate: function (){
            this.result = math.eval(this.expr)
        }
    }
})
