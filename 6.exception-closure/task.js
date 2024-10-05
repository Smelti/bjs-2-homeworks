function parseCount(count) {
  let parsedCount = Number.parseFloat(count);
  if (Number.isNaN(parsedCount)) {
    throw new Error("Невалидное значение")
  }
  if (parseCount.startsWith("0") && count.length > 1) {
    parsedCount = Number.parseInt(count.slice(1), 10)
  }
  return parsedCount
}

function validateCount(count) {
  try {
    return parseCount(count)
  } catch (error) {
    return error
  }
}


class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (this.a + b < this.c || this.a + this.c < b || this.b + this.c < this.a) {
      throw new Error ("Треугольник с такими сторонами не существует")
    }  
  }
  get perimeter() {
    return this.a + this.b + this.c
  }
  get area() {
    const p = this.perimeter / 2
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c)
  } catch(error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует"
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует"
      }
    }
  }
}
