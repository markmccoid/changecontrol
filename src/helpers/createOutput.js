
export const createInternal = (dataObj, typeOfApproval = 'INTERNAL') => {
	let { sfNumber, company, usersToAdd, usersToRemove } = dataObj;

	let internalText = `************CHANGE REQUEST ${typeOfApproval} APPROVAL - CASE ${sfNumber} ************
●     Request: Add access to ${company} for ${usersToAdd}; ${usersToRemove ? `Remove access to ${company} for ${usersToRemove}` : ''}
●     Process: Add user ${usersToAdd} to the security spreadsheet with ${company} in the COMPANY_REDUCE field.
●     Testing: Analyst will verify that the users have been added to or removed from the security spreadsheet.User will verify by logging into Analytix.
●     Rollback/Recovery: Remove user ${usersToAdd} from ${company}
●     Risk: Low
●     Alternatives: None
●     Timeline: ASAP`;
	return  internalText;
}

export const createCustomer = (dataObj) => {
	let internalText = createInternal(dataObj, 'CUSTOMER');
	return `***I need your final approval before I can proceed.***
${internalText}
●     Maintenance: This forms part of the maintenance process and is not covered under the SLA
●     NCS Approval Status: Approved   `;
}

export const createComplete = (dataObj) => {
	let { sfNumber, company, usersToAdd, usersToRemove } = dataObj;
	return `*******CHANGE REQUEST COMPLETED - CASE ${sfNumber} ************
●     Request:Add access to ${company} for ${usersToAdd}; ${usersToRemove ? `Remove access to ${company} for ${usersToRemove}` : ''}
●     Completed by: Mark McCoid`;
}
