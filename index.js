// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '12 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({},employee, {[key]: value });
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key, value){
    return Object.assign({}, obj, { [key]: value });
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee

}
