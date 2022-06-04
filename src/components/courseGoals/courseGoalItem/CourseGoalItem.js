// Imports
import React from "react";
// CSS Modules
import classes from "./CourseGoalItem.module.css";

// Component
const CourseGoalItem = (props) => {

	// Delete
	const deleteHandler = () => {
		props.onDelete(props.id);
	};

	// Return
	return(
		<li className={ classes.goalItem } onClick={ deleteHandler }>
			{ props.children }
		</li>
	);
	
};

// Export
export default CourseGoalItem;