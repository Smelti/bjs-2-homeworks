function parseCount(count) {
  let parsedCount = Number.parseFloat(count);
  if (Number.isNaN(parsedCount)) {
    throw new Error("Невалидное значение")
  }
  return count
}

function validateCount(count) {
  try {
    return parseCount(count)
  } catch (error) {
    return error
  }
}
