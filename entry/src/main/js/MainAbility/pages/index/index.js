export default {
    data: {
        pageNums: ['1', '2', '3'],
        dotIndex: 0,
        steps: 0,
        calories: 0,
        heartRate: 70
    },
    change(e) {
        this.dotIndex = e.index;
    },
    onInit() {
        this.startSimulation()
    },

    startSimulation() {
        setInterval(() => {
            this.steps += Math.floor(Math.random() * 5)
            this.calories = (this.steps * 0.04).toFixed(1)
            this.heartRate = 65 + Math.floor(Math.random() * 10)
        }, 2000)
    }
}