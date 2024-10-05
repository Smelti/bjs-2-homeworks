function parseCount(count) {
  if (Number.isNaN(count) || Number.parseFloat(count)) {
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
