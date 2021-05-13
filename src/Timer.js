class Timer {
    // The name property is passed into the constructor and the class is initialized.
    constructor(name, desc) {
      this.name = name
      this.desc = desc;
      this.time = 0;
      this.isRunning = false;
    }
  }
  
  export default Timer;