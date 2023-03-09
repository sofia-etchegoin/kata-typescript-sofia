// fillArrayWithAnything should take a value of any type and a number
// and return an array of that value repeated the number of times
// if the number is less than 1, return an empty array
export function fillArrayWithAnything(): void {
}

// getArrayOfZeros should take a number and return an array of that number of zeros
// it should use the fillArrayWithAnything function to do this
export function getArrayOfZeros(): void {
}

// getArrayOfBees should take a number and return an array of that number of "bees"
// it should use the fillArrayWithAnything function to do this
export function getArrayOfBees(): void {
}

// getFirstItem should take an array of any type and return the first item in the array regardless of type
// the item should no longer be in the array
// if there is no first item, return undefined
export function removeFirstItem(): void {
}

// ----------- TYPE CASTING -----------

// removeEmptySpots should take an array of nulls and another type and remove all null values
// it should return a new array containing the remaining items
export function removeEmptySpots(): void {
}

export function getEmptyArray(): void {
}

export function addStringToArray() {
  const arr = getEmptyArray()
  // This SHOULD work
  arr.push('hello')
  // This should NOT work
  arr.push(3)
  return arr
}