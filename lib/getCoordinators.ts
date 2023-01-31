import coordinators from "./coordinators.json";

export function getAllCoordinators() {
	return coordinators;
}

export function getCoordinatorsByGroup() {
	return {
		teachers: coordinators.filter(
			(coordinator) =>
				coordinator.teacherOrStudent.toLowerCase() === "teacher"
		),
		students: coordinators.filter(
			(coordinator) =>
				coordinator.teacherOrStudent.toLowerCase() === "student"
		),
	};
}
