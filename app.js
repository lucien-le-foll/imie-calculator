var app = new Vue({
    el: '#app',
    data: {
        opA: 0,
        opB: 0,
        result: 0
    },
    methods :{
        soustracfion: function(){
            this.result= parseInt(this.opA - this.opB);
        }
    }
})
