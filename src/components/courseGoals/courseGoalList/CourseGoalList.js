// Imports
import React from 'react';
import styled from "styled-components";
import CourseGoalItem from '../courseGoalItem/CourseGoalItem';

// Component
const CourseGoalList = (props) => {

	// Return
	return(
		<Wrapper className="goal-list">
			{
				props.items.map((goal) => {
					return(
						<CourseGoalItem key={ goal.id } id={ goal.id } onDelete={ props.onDeleteItem }>
							{ goal.text }
						</CourseGoalItem>
					);
				})
			}
		</Wrapper>
	);
};

// Styled
const Wrapper = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export default CourseGoalList;