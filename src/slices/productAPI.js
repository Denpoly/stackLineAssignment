// A mock function to mimic making an async request for data

const productData = require('../stackline_frontend_assessment_data_2021.json')
export function fetchProductData(prodID) {
  return new Promise((resolve) => {
    const product = productData.find(product => {
      return product['id'] ===  prodID
    })
    resolve(product)
  });
}
