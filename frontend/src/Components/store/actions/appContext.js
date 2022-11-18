import React, {useState, useEffect} from 'react';
import getState from './actions';



export const Context = React.createContext();

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(
        getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updatedStore =>
                setState({
                    store: Object.assign(state.store, updatedStore),
                    actions: {...state.actions}
                })
        })
    );

    useEffect(() => {
        state.actions.loadSomeData();
        state.actions.syncTokenFromSessionStore();
    }, []);

    return (
        <Context.Provider value={state}>
            <PassedComponent {...props} />
        </Context.Provider>
    );
};
return StoreWrapper;
};

export default injectContext;

