let allEmployees = [];

let salary = 0;

$(document).ready(readyNow);

function readyNow() {
    console.log("DOM is loaded!");

    //listener for submit button
    $("#submitEmployeeBtn").on("click", onSubmitHandler);

    // listener for delete button
    $("#employeeList").on("click", ".deleteBtn", onDeleteHandler);

    //to see prepopulated list when page loads
    // render();
};

function onDeleteHandler() {
    console.log("Inside of deleteEmployee()");

    // let deleteBtn = $(this);
    // new array for deleted employees
    let newEmployees = [];
    //use first name to delete from employees[]
    const idNumToDelete = $(this).parent().siblings().eq(2).text();//this = delete button, parents = column, siblings = cells w/in column, eq(2) targets index 2
    //console should show the first name for employee to delete
    console.log("Employee to delete:", idNumToDelete);

    for (let employee of allEmployees) {
       
        if (employee.idNumber !== idNumToDelete) {
            newEmployees.push(employee);
        };
       
    };

    allEmployees = newEmployees;
    console.log("these are new employees", newEmployees);
    console.log("these are all employees", allEmployees);
    
    render();


};

    
function onSubmitHandler() {

    console.log("Inside of addNewEmployee()");
    console.log("Employees before new employee added:", allEmployees);

    //variable to store input values
    let firstNameInputValue = $("#firstNameInput").val();
    let lastNameInputValue = $("#lastNameInput").val();
    let idNumberInputValue = $("#idNumber").val();
    let titleInputValue = $("#jobTitle").val();
    let annualSalaryInputValue = $("#annualSalary").val();

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
        lastName: lastNameInputValue,
        idNumber: idNumberInputValue,
        jobTitle: titleInputValue,
        annualSalary: annualSalaryInputValue

    };

    
    //add to array
    allEmployees.push(newEmployeeToAdd);
    console.log("Employees after new employee added:", allEmployees);

    let totalMonthlyValue = 0;//specify equal to a number or else you may get NaN
   
    //loop to calculate monthly costs
    for (let employee of allEmployees) {
        totalMonthlyValue += 1 * ((employee.annualSalary)/ 12);
    }
    console.log('total salary for all employees', totalMonthlyValue);

    salary = totalMonthlyValue;

   
   newSalary();

   clearInput();

    //render the DOM after new employee added
    //re-render when new employee added
    render();

}

function newSalary() {
 //if total salary exceeds $20,000, background of form turns red
 if (salary > 20000) {
    console.log("total salary", salary);
    $("#salaryTable").addClass("maxSalary");
} else {

}
}

function clearInput() {
    const firstNameInputValue = $("#firstNameInput").val("");
    const lastNameInputValue = $("#lastNameInput").val("");
    const idNumberInputValue = $("#idNumber").val("");
    const titleInputValue = $("#jobTitle").val("");
    const annualSalaryInputValue = $("#annualSalary").val("");
}



function render() {
    //reset monthly total
    $("#salaryTable").empty();

    //add monthly total to DOM
    $("#salaryTable").append(`
    <tr>
        <td>${salary}</td>
    <tr>
    `);
    


    //reset employee list
    $("#employeeList").empty();

    //add employees and delete button to DOM
    for (let employee of allEmployees) {


        $("#employeeList").append(`
        
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td>
                <button class="deleteBtn">
                Delete
                </button>
            </td>
        </tr>
        `);
    };

    
};