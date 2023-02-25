let allEmployees = [];

$(document).ready(readyNow);

function readyNow() {
    console.log("DOM is loaded!");

    //listener for submit button
    $("#submitEmployeeBtn").on("click", addNewEmployee);

    // listener for delete button
    $("#employeeList").on("click", ".deleteBtn", deleteEmployee);
}

function deleteEmployee(){
    console.log("Inside of deleteEmployee()");

    // let deleteBtn = $(this);
    // new array for deleted employees
    let newEmployees = [];
    //use ID number to delete from employees[]
    const idNumberToDelete = $(this).parent().siblings().first().text();
    //console should show the ID number for employee to delete
    console.log("Employee to delete:", idNumberToDelete);

    for (let employee of allEmployees) {
       
        if (employee.firstName !== idNumberToDelete) {
            newEmployees.push(employee);
        }
       
    }
    allEmployees = newEmployees;
    console.log("these are new employees", newEmployees);
    console.log("these are all employees", allEmployees);
    render();

}

function addNewEmployee() {
    console.log("Inside of addNewEmployee()");
    console.log("Employees before new employee added:", allEmployees);

    //get input values
    const firstNameInputValue = $("#firstNameInput").val();
    const lastNameInputValue = $("#lastNameInput").val();
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
        lastName: lastNameInputValue,
        idNumber: idNumberInputValue,
        jobTitle: titleInputValue,
        annualSalary: annualSalaryInputValue
    };

    //add to array
    allEmployees.push(newEmployeeToAdd);
    console.log("Employees after new employee added:", allEmployees);

    //render the DOM after new employee added
    //re-render when new employee added
    render();

}

function render() {
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
}