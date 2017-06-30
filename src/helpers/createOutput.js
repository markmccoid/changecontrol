
export const createInternal = (dataObj) => {
	let { sfNumber, company, usersToAdd, usersToRemove } = dataObj;

	let internalText = `************CHANGE REQUEST INTERNAL APPROVAL - CASE ${sfNumber} ************
	●     Request: Add access to ${company} for ${usersToAdd}; Remove access to ${company} for ${usersToRemove}
	●     Process: Add user ${usersToAdd} to the security spreadsheet with ${company} in the COMPANY_REDUCE field.
	●     Testing: Analyst will verify that the users have been added to or removed from the security spreadsheet.User will verify by logging into Analytix.
	●     Rollback/Recovery: Remove user ${usersToAdd} from ${company}
	●     Risk: Low
	●     Alternatives: None
	●     Timeline: ASAP
	`;
	return  internalText;
}
