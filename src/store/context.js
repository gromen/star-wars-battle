import { createContext, useMemo, useReducer } from 'react';
import reducerContext, { initialState } from './reducerContext';

const Context = createContext({initialState});

export const ContextProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducerContext, initialState);
	const valueContext = useMemo(() => ({ state, dispatch }), [state, dispatch]);

	return (
		<Context.Provider value={valueContext}>{children}</Context.Provider>
	)
}

export default Context;
