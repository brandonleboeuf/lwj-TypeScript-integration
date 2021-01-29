// @ts-check
import { addAlbum } from '../ts/album.js';
import { multiply, validateInput, storeAddress } from './utils.js'

const res = multiply(2,8)

console.log({ multiply: res })

const input = storeAddress("Brandon", "4-9 NE 1-th Ave", "Portland", "OR", "97220")

const addressLine1 = validateInput(input);

console.log({validateInput: addressLine1})

const BB = addAlbum("Phish", "Billy Breaths", 1996)

console.log(BB)