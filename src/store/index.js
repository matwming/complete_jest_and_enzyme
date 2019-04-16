import { combineReducers } from "redux";
import { successReducer } from "./successReducer";
import { guessedWordsReducer } from "./guessedWordsReducer";
import { secretWordReducer } from "./secrectWordReducer";
export const rootReducer = combineReducers({
 success: successReducer,
 guessedWords: guessedWordsReducer,
 secretWord: secretWordReducer
});
