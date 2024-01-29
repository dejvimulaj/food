import { create } from 'zustand'
import products from './products'
import cartProducts from './CartProduct'
import { devtools, persist } from 'zustand/middleware';

export const useCartChipStore = create((set) => ({
  cartCounter: 0,
  incCounter: () => set((state) => ({ cartCounter: state.cartCounter + 1 })),
  decCounter: () => set((state) => ({ cartCounter: state.cartCounter - 1 })),
  resetCounter: () => set({ cartCounter: 0 }),
}))

const useCartStore = create(((set,get) => ({
    cartItems: [],
  
    addItemToCart: (item) => {
      set(state => {
        const itemExists = state.cartItems.find(cartItem => cartItem.id === item.id);
        if (itemExists) {
          if (typeof itemExists.quantity === 'number') {
            itemExists.quantity++;
          }
          return { cartItems: [...state.cartItems] };
        } else {
            console.log(item)
          return { cartItems: [...state.cartItems, { ...item, quantity: 1 }]};
        }
      }); },
    increaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );
    
        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            itemExists.quantity++;
          }
    
          set({ cartItems: [...get().cartItems] });
        }
      },
      decreaseQuantity: (productId) => {
        const itemExists = get().cartItems.find(
          (cartItem) => cartItem.id === productId
        );
    
        if (itemExists) {
          if (typeof itemExists.quantity === "number") {
            if (itemExists.quantity === 1) {
              const updatedCartItems = get().cartItems.filter(
                (item) => item.id !== productId
              );
              set({ cartItems: updatedCartItems });
            } else {
              itemExists.quantity--;
              set({ cartItems: [...get().cartItems] });
            }
          }
        }
      },
      removeItemFromCart: (productId) => {
        const updatedCartItems = get().cartItems.filter(
          (item) => item.id !== productId
        );
        set({ cartItems: updatedCartItems });
      }
  })));

export default useCartStore;

export const useAuthState = create(
  (set) => ({
    signUpToken: "",
    setSignUpToken: (token) => {set({ signUpToken: token })},
    userEmail:window.localStorage.getItem('email'),
    setUserEmail: (email) => {window.localStorage.setItem('email', email )},
    authToken: window.localStorage.getItem('authToken'),
    setAuthToken: (token) => {
    window.localStorage.setItem('authToken', token)},
    refreshToken:  JSON.stringify(window.localStorage.getItem('refreshToken')), 
    setRefreshToken: (token) => {set({ refreshToken: token } )
    window.localStorage.setItem('refreshToken', token)}, 
    userRole: window.localStorage.getItem('Role' ),
    setRole: (role) => {window.localStorage.setItem('Role', role )},
    logOut: () => {set({ authToken: "", refreshToken: "", userRole: "" })
    window.localStorage.setItem('authToken', "")
    window.localStorage.setItem('refreshToken', "")
    window.localStorage.setItem('Role', "" )}
  }),


  
    );

  