// Imports
import React from 'react';
import styled from "styled-components";

// Component
const Button = (props) => {

	// Return
	return(
		<Wrapper type={ props.type } onClick={ props.onClick }>
			{ props.children }
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.button`
	width: 100%;
	font: inherit;
	padding: 0.5rem 1.5rem;
	border: 1px solid #8b005d;
	color: white;
	background: #8b005d;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
	transition: 0.35s ease;
	cursor: pointer;
	&:focus{
		outline: none;
	}
	&:hover, &:active{
		background: #ac0e77;
		border-color: #ac0e77;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
	}
	@media only screen and (min-width:768px){
		width: auto;
	}
`;

// Export
export default Button;