var app = new Vue({
    el: '#app',
    data: {
        expr: '',
        result: 0
    },
    methods: {
        calculate: function (){
            this.result = eval(this.expr)
        }
    }
})
