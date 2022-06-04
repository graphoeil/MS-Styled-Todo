// Imports
import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../../ui/button/Button';

// Component
const CourseInput = (props) => {

	// States
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	// Input change
	const goalInputChangeHandler = (e) => {
		if (e.target.value.trim().length > 0){
			setIsValid(true);
		}
		setEnteredValue(e.target.value);
	};

	// Submit form
	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (enteredValue.trim().length === 0){
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
		setEnteredValue('');
	};

	// Return
	return(
		<form onSubmit={ formSubmitHandler }>
			<FormControl invalid={ !isValid }>
				<label>Course Goal</label>
				<input type="text" value={ enteredValue } onChange={ goalInputChangeHandler }/>
			</FormControl>
			<Button type="submit">Add Goal</Button>
		</form>
	);

};

// Styled
const FormControl = styled.div`
	margin: 0.5rem 0;
	label{
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
		color: ${ (props) => { return props.invalid ? 'firebrick' : 'black' } };
	}
	input{
		display: block;
		width: 100%;
		border: 1px solid ${ (props) => { return props.invalid ? 'firebrick' : '#ccc' } };
		background-color: ${ (props) => { return props.invalid ? '#ffd7d7' : 'transparent' } };
		font: inherit;
		line-height: 1.5rem;
		padding: 0 0.25rem;
		&:focus{
			outline: none;
			background: #fad0ec;
			border-color: #8b005d;
		}
	}
`;

// Export
export default CourseInput;