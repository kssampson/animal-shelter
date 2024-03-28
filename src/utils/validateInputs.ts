const isValidFirstName = (firstName: string) => {
  return /^[A-Za-z]+$/.test(firstName);
}

const isValidLastName = (lastName: string) => {
  return /^[A-Za-z]+$/.test(lastName);
}

const isValidDate = (date: Date) => {
  return true;
}

const isValidQuantity = (quantity: number, type: string) => {
  if (type === 'money') {
    if (typeof quantity !== 'number' || quantity > 10000 || quantity <= 0) {
      return false;
    }
    return true;
  } else {
    if (typeof quantity !== 'number' || quantity > 200 || quantity <= 0) {
      return false;
    }
    return true;
  }
}

const isValidType = (type: string, filterOptions: string[]) => {
  const typeCount = filterOptions.reduce((acc, option) => {
    option === type && acc++;
    return acc;
  }, 0)
  if (typeCount > 1 || typeCount < 1) {
    return false;
  }
  return true;
}

const allInputsValid = (firstName: string, lastName: string, date: Date, quantity: number, type: string, filterOptions: string[]) => {
  if (
    isValidFirstName(firstName) &&
    isValidLastName(lastName) &&
    isValidDate(date) &&
    isValidQuantity(quantity, type) &&
    isValidType(type, filterOptions)
    ) {
    return true;
  }
  return false;
}


export const validateInputs = { isValidFirstName, isValidLastName, isValidDate, isValidQuantity, isValidType, allInputsValid };