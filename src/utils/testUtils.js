import { render } from '@testing-library/react';
import Context from '../store/context';

export const customRender = (ui, {providerProps, ...renderOptions}) => {
	return render(
		<Context.Provider value={providerProps}>{ui}</Context.Provider>,
		renderOptions,
	)
};
