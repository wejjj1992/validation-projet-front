// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', JSON.stringify(user));
}

//******************* Customer ******************************* */
// set the token and user from the session storage
export const setCartSession = (cart) => {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

export const getCartSession = () => {
  const cartStr = sessionStorage.getItem('cart');
  if (cartStr) return JSON.parse(cartStr);
  else return [];
}

export const removeCartSession = () => {
  sessionStorage.removeItem('cart');
}

export const getInfoCartSession = () => {
  const cartStr = sessionStorage.getItem('cart');
  const array = JSON.parse(cartStr);
  const info = {
    products: [],
    totalPriceProducts: 0,
    totaleProducts: 0
  };
  const products = [];
  const map = new Map();
  if (array) {


    for (const item of array) {

      if (!map.has(item._id)) {

        map.set(item._id, true);    // set any value to Map
        products.push({
          id: item._id,
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl,
          totalPriceProduct: item.price,
          count: 1,
        });
      } else {
        const index = products.findIndex((el) => el.id === item._id);
        products[index] = {
          id: item._id,
          title: item.title,
          price: item.price,
          count: products[index].count + 1,
          totalPriceProduct: products[index].totalPriceProduct + item.price
        };
      }

      info.totalPriceProducts += item.price;
    }
    info.products = products;
    info.totaleProducts = products.length;
  }
  if (info.products) return info
  else return null;

}
// remove the token and user from the session storage
export const removeCustomerSession = () => {
  sessionStorage.removeItem('tokenCustomer');
  sessionStorage.removeItem('customer');
}

// set the token and user from the session storage
export const setCustomerSession = (tokenCustomer, customer) => {
  sessionStorage.setItem('tokenCustomer', tokenCustomer);
  sessionStorage.setItem('customer', JSON.stringify(customer));
}

export const getCustomer = () => {
  const customerStr = sessionStorage.getItem('customer');
  if (customerStr) return JSON.parse(customerStr);
  else return null;
}

// return the token from the session storage
export const getCustomerToken = () => {
  return sessionStorage.getItem('tokenCustomer') || null;
}