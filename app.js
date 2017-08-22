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
        ],
        memories : [
        { value : 0 }, { value : 0 }, { value : 0 }
        ]
    },
    methods: {
        calculate: function (){
            this.result = math.eval(this.expr)
            this.historic.unshift({calcul:this.expr, result:this.result})
        },
        append: function(input){
            this.expr += input
        },
        toggleMemory: function(index){
            if(this.memories[index].value == 0){
                this.memories[index].value = this.result
            } else if (this.memories[index].value != 0) {
                this.expr += this.memories[index].value
                this.memories[index].value = 0
            }
        }
    }
})