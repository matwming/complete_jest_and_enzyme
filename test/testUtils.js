import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../src/store/index";
import thunk from "redux-thunk";

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/
export const storeFactory = initialState => {
 const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
 return createStoreWithMiddleware(rootReducer, initialState);
};
/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/
export const findByTestAttr = (wrapper, val) => {
 return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
 const propsError = checkPropTypes(component.propTypes, conformingProps, "prop", component.name);
 expect(propsError).toBeUndefined();
};
