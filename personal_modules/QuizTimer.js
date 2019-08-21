class QuizTimer {
  constructor(maxTime, onTimeOverCb, onTickCb) {
    this.maxTime = maxTime
    this.onTimeOverCb = onTimeOverCb
    this.onTickCb = onTickCb
    this.countdown = this.maxTime
  }

  sync() {
    this.countdown = this.maxTime
  }

  startTimer() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  tick() {
    this.countdown--
    this.onTickCb(this.countdown)
    if(this.countdown <= 0) {
      this.stop()
      this.onTimeOverCb()
    }
  }

  reset() {
    this.countdown = this.maxTime
    this.startTimer()
  }

  stop() {
    clearInterval(this.interval)
  }
}

module.exports = QuizTimer
