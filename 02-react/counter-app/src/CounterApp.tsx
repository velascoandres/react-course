import React, { MouseEventHandler, useState } from 'react';

export interface ICounterAppProps {
	value: number;
}

export type MouseEHandlerFact = (...args: any) => MouseEventHandler;


const CounterApp = ({ value = 10 }: ICounterAppProps) => {


	const [counter, setCounter] = useState<number>(value);


	// handleReset
	const handleReset: MouseEventHandler = (e) => setCounter(value);
	// handleAdd Factory
	const handleAddFactory: MouseEHandlerFact = (numero: number) => {
		return (e: React.MouseEvent) => {
			// Actualizamos el estado del componente
			const updatedCounter = counter + numero;
			// setCounter( updatedCounter );
			// Otra forma de actualizar el estado
			setCounter((oldCounter) => oldCounter + numero);
		};
	};

	return (
		<div>
			<h1>Counter App</h1>
			<h2>{counter}</h2>

			<button onClick={handleAddFactory(1)}>
				+1
			</button>
			<button onClick={handleReset}>
				Reset
			</button>
			<button onClick={handleAddFactory(-1)}>
				-1
			</button>
			
		</div>
	);
}

export default CounterApp;
