console.log('Hello world');
$(document).ready(readNow);

function readNow(){
$('.button').on('click', submitButton,);

}


function submitButton(){
let firstName = $('.firstName').val();
let lastName = $('.lastName').val();
let ID = $('.Id').val();
let titleClass = $('.titleClass').val();
let annualSalary = $('.annualSalary').val();

$('.tableBody').append(`
<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${ID}</td>
    <td>${titleClass}</td>
    <td>${annualSalary}</td>
</tr>
`);

$('.firstName').val(' ');
$('.lastName').val(' ');
$('.Id').val(' ');
$('.titleClass').val(' ');
$('.annualSalary').val(' ');



}
