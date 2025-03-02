function converter(){
 let value = document.getElementById('value').value;
 let value1 =document.getElementById('value1').value;
 let value2 = document.getElementById('value2').value;
 let output =document.getElementById('output')
 if(value ===''){
   alert('please enter valid number ?');
   return;
 }
 
 let formula={
   kilometres:'1000',
   meter:'1',
   centimetres:'0.01',
   millimetres:'0.001'
 }
let valueInMeters =value * formula[value1];
let result=valueInMeters/formula[value2];

output.innerText= `${value} ${value1} is ${result} ${value2}`

}
