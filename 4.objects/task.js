function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks.length === 0) {
    this.marks = [...marksToAdd]
  } else {
    this.marks = [...this.marks, ...marksToAdd]
  }
}

Student.prototype.getAverage = function () {
  if (this.marks.length === 0) {
    return 0
  }
  return this.marks.reduce((acc, marks) => acc + marks, 0) / this.marks.length
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  let excluded = new Object(reason);
  this.excluded = reason;
}
