console.log('Hello world');
$(document).ready(readNow);

function readNow(){
$('.button').on('click', submitButton,);

}


function submitButton(){
let firstName = $('.firstName').val();
let lastName = $('.lastName').val();
let ID = $('.Id').val();
let Title = $('.title').val();
let annualSalary = $('.annualSalary').val();

$('.tableBody').append(`
<tr>
    <td>${firstName}</td>
     <td>${lastName}</td>
     <td> ${ID}</td>
    <td>${Title}</td>
    <td>${annualSalary}</td>
</tr>
`)

$('.firstName').val(' ');
$('.lastName').val(' ');
$('.Id').val(' ');
$('.title').val(' ');
$('.annualSalary').val(' ');

}
