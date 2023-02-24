let employees = [];

$(document).ready(readyNow);

function readyNow() {
    console.log("DOM is loaded!");

    //listener for submit button
    $("#submitEmployeeBtn").on("click", addNewEmployee);
}

function addNewEmployee() {
    console.log("Inside of addNewEmployee()");
    console.log("Employees before new employee added:", employees);

    //get input values
    const firstNameInputValue = $("#firstNameInput").val();
    const lastNameInputValue =  $("#lastNameInput").val();
    const idNumberInputValue = $("#idNumber").val();
    const titleInputValue = $("#jobTitle").val();
    const annualSalaryInputValue = $("#annualSalary").val();

    console.log(`
        Input Values:
        First Name: ${firstNameInputValue}
        Last Name: ${lastNameInputValue}
        ID Number: ${idNumberInputValue}
        Job Title: ${titleInputValue}
        Annual Salary: ${annualSalaryInputValue}
    `)

    //capture employee values outside an object

    const newEmployeeToAdd = {
        firstName: firstNameInputValue, 
        lastName: idNumberInputValue,
        idNumber: idNumberInputValue,
        jobTitle: titleInputValue,
        annualSalary: nnualSalaryInputValue
    };

    //add to array
    employees.push(newEmployeeToAdd);
    console.log("Employees after new employee added:", employees);

}