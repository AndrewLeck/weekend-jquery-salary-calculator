console.log('Hello world');
$(document).ready(readNow);

let employees = [];

//let monthlySalary;
// let firstName = $('.firstName').val();
// let lastName = $('.lastName').val();
// let ID = $('.Id').val();
// let titleClass = $('.titleClass').val();
// let annualSalary = $('.annualSalary').val();
function readNow(){
$('.button').on('click', submitButton);
// $('.button').on('click', getMonthlyTotal);

}


function submitButton(){
let firstName = $('.firstName').val();
let lastName = $('.lastName').val();
let ID = $('.Id').val();
let titleClass = $('.titleClass').val();
let annualSalary = Number($('.annualSalary').val());

let people = {
    firstName: firstName,
    lastName: lastName,
    id:ID,
    title: titleClass,
    annualSalary: annualSalary
}; 
employees.push(people);
console.log(employees);

$('.tableBody').empty();

let totalSalary = 0;

for( let people of employees){
    console.log(people.firstName);
    totalSalary+= people.annualSalary;

    
$('.tableBody').append(`
<tr>
    <td>${people.firstName}</td>
    <td>${people.lastName}</td>
    <td>${people.id}</td>
    <td>${people.title}</td>
    <td>${people.annualSalary}</td>
</tr>
`);
}


$('.firstName').val(' ');
$('.lastName').val(' ');
$('.Id').val(' ');
$('.titleClass').val(' ');
$('.annualSalary').val(' ');




 $('.total').text('Total Monthly:'+ totalSalary );


}


//let monthlySalary = $('.annualSalary').val();
// function getMonthlyTotal(){ 
//    $('.total').append(`${annualSalary}`);
//     console.log(getMonthlyTotal, annualSalary);

// }