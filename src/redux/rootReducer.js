//setting up redux store
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer']
};

const rootReducer = combineReducers({
    //   marketReducer,
});

export default persistReducer(persistConfig, rootReducer);
