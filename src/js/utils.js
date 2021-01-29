/**
 * this will do all the magic for you
 * @param {number} num1 
 * @param {number} num2 
 */
export function multiply(num1, num2){
  return num1 * num2;
}

/**
 * @typedef {object} UserInfo an object with address information
 * @property {string} name 
 * @property {{ line1: string, city: string, state: string, zip: string}} address 
 */

/**
 * @param {string} name 
 * @param {string} line1 
 * @param {string} city 
 * @param {string} state 
 * @param {string} zip 
 * @returns {UserInfo}
 */
export function storeAddress(name, line1, city, state, zip) {
  return {
    name,
    address: {
      line1,
      city,
      state,
      zip
    }
  }
}

/**
 * @param {UserInfo} input 
 */
export function validateInput(input){
  if (!input?.address?.line1) {
    throw new Error('invalid address')
  }

  return input.address.line1
}