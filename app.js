const App = {
    data() {
        return {
            imgs: ['public/stone.jpg', 'public/scissors.jpg', 'public/paper.jpg'],
            cards_rus: ['Камень', 'Ножницы', 'Бумага'],
            player: undefined,
            pc: undefined,
            winner: undefined,
            counter_player: 0,
            counter_pc: 0,
            style_pc: '',
            style_player: ''
        }
    },
    methods: {
        turn(idx) {
            this.player = idx
            this.pc = Math.floor(Math.random() * 3)
            if (this.player === (this.pc + 1) % 3) {
                this.winner = 1 //компьютер
                this.counter_pc++
            } else if (this.player === this.pc) {
                this.winner = 0 //ничья
            } else {
                this.winner = -1 //игрок
                this.counter_player++
            }
            this.chooseStyle()
        },

        reset() {
            this.counter_pc = 0
            this.counter_player = 0
            this.winner = undefined
        },

        chooseStyle() {
            if (this.winner === 1) {
                this.style_pc = 'card player style-winner'
                this.style_player = 'card player style-lose'
            } else if (this.winner === -1) {
                this.style_player = 'card player style-winner'
                this.style_pc = 'card player style-lose'
            } else {
                this.style_player = 'card player style-draw'
                this.style_pc = 'card player style-draw'
            }
        }
    }
}
Vue.createApp(App).mount('#app')