export const initialState = JSON.parse(localStorage.getItem("store")) || {
  son: 9,
  wishlist: [],
  cart: [],
  token: null,
};
export const reducer = (state, action) => {
  let memory = {};
  switch (action.type) {
    case "INC":
      return { ...state, son: state.son + 1 };
    case "ADD_TO_WISHLIST":
      let index = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        memory = { ...state, wishlist: [...state.wishlist, action.payload] };
        saveStorege(memory);
        return memory;
      } else {
        memory = {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.id !== action.payload.id
          ),
        };
        saveStorege(memory);
        return memory;
      }
    case "CART":
      let cartIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartIndex < 0) {
        // Item not in cart, so add it
        memory = {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      } else {
        // Item is in cart, so remove it
        memory = {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }
      saveStorege(memory);
      return memory;

    case "LOGIN":
      memory = { ...state, token: action.payload };
      saveStorege(memory);
      return memory;
    case "LOGOUT":
      memory = { ...state, token: null };
      saveStorege(memory);
      return memory;
    default:
      return state;
  }
};
function saveStorege(memory) {
  localStorage.setItem("store", JSON.stringify(memory));
}
