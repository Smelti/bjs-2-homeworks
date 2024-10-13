class AlarmClock { 

  constructor() { 
    this.alarmCollection = [];
    this.intervaldId = null; 
  }

  addClock(time, callback) { 
    this.time = new Date();
    
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы")
    }
    
    const existAlarm = this.alarmCollection.find(alarm => alarm.time === time); 
    
    if (existAlarm) {
      console.warn("Уже присутствует звонок на это же время")
    };
    
    this.alarmCollection.push({ 
      callback, 
      time, 
      canCall: true 
    })
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }
  
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, 5)
  }

  start() {
    if (this.intervaldId) {
      return;
    }
    this.intervaldId = setInterval(() => {
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false
          alarm.callback()
        }
      }
    )}, 1000)
  }
  
  stop() {
    cleanInterval();
    this.intervaldId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true)
  }

  clear() {
    stop(this.intervaldId)
    this.alarmCollection = [];
  }
}
