// Imports
import React, { useState } from "react";
import styled from "styled-components";
import CourseGoalList from "./components/courseGoals/courseGoalList/CourseGoalList";
import CourseInput from "./components/courseGoals/courseInput/CourseInput";

// Component
const App = () => {

	// State (initial)
	const [courseGoals, setCourseGoals] = useState([
		{ text: 'Do all exercises !', id: 'g1' },
		{ text: 'Finish the course !', id: 'g2' }
	]);

	// Add goal
	const addGoalHandler = (enteredText) => {
		setCourseGoals((prevGoals) => {
			const updatedGoals = [ ...prevGoals ];
			updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
			// ou updatedGoals = [ { text: enteredText, id: Math.random().toString() }, ...prevGoals ];
			return updatedGoals;
		});
	};

	// Delete goal
	const deleteItemHandler = (goalID) => {
		setCourseGoals((prevGoals) => {
			const updatedGoals = prevGoals.filter((goal) => {
				return goal.id !== goalID;
			});
			return updatedGoals;
		});
	};

	// Initial content
	let content = (
		<p style={{ textAlign:'center' }}>No goals found. Maybe add one ?</p>
	);
	if (courseGoals.length > 0) {
		content = <CourseGoalList items={ courseGoals } onDeleteItem={ deleteItemHandler } />;
	}

	// Return
	return(
		<React.Fragment>

			{/* Add new goal */}
			<FormWrapper>
				<CourseInput onAddGoal={ addGoalHandler } />
			</FormWrapper>
			{/* Add new goal */}

			{/* Goals list */}
			<ListWrapper>{ content }</ListWrapper>
			{/* Goals list */}

		</React.Fragment>
	);

};

// Styled
const FormWrapper = styled.section`
	width: 30rem;
	max-width: 90%;
	margin: 3rem auto;
	padding: 2rem;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
`;
const ListWrapper = styled.section`
	width: 35rem;
	max-width: 90%;
	margin: 3rem auto;
`;

// Export
export default App;