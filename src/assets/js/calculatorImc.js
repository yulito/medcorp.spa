import {createPDFImc} from './pdf';

//bring the div element from form
export function subFormImc(element){

  //call the form id
  const formImc = element.querySelector('#idImcForm');
  //execute the next function when active submit into form
  formImc.addEventListener('submit', getDataForm);

  //function to get all user data from imc form
  function getDataForm(e){
    e.preventDefault();

    //create object form
    const data = new FormData(formImc);
    
    //get all data and input to the list with keys
    const dataList = {
      name: data.get('name'),
      sex: data.get('sex'),
      height: data.get('height'),
      weight: data.get('weight')
    }
    
    //call function to validate every data.
    validatorImcData(dataList)
    formImc.reset();
  }
}
//---------------------------------------------------
function validatorImcData(dl){
  let name = dl.name;
  let sex = dl.sex;
  let height = parseInt(dl.height);
  let weight= parseInt(dl.weight);

  let answer = false;

  if(name.trim().length === 0 || name == null || typeof(height) !== 'number' || height <= 80 || height >= 250 || isNaN(height) == true || typeof(weight) !== 'number' || weight <= 20 || isNaN(weight) == true || sex == null){ 
    answer = 'Valida los datos y llena los campos vacios.' 
  }

  /*      
    If return is false, call function to calculate imc and 
    get visibility from div box result, 
    else show message field error.
  */
  if(answer == false){
    return calculateImc(name,sex,height,weight);
  }else{
    return fieldError(answer);
  }
}

function fieldError(errMsg){
  alert(errMsg);
}


function calculateImc(n,s,h,w){

  const boxResult = document.querySelector('.result');
  const spanName = document.querySelector('#sName');
  const spanImc = document.querySelector('#sImc');
  const spanStatus = document.querySelector('#sStatus');
  const spanInfo = document.querySelector('#sInfo');

  let imcValue;
  let nro = new String(h);
  let parseH;

  if(nro.length == 3){
    let mt = nro.substring(0,1)
    let cm = nro.substring(1,3)
    let nroFormat = mt+'.'+cm
    parseH = parseFloat(nroFormat)
    imcValue = w / Math.pow(parseH,2)    
  }else{
    parseH = parseFloat(nro)
    imcValue = w / Math.pow(parseH,2)
  }

  if(s == 'm'){ s = 'Mujer'}else{ s = 'Hombre'}
  //fill into span element with data
  spanName.innerHTML = n+' - '+s;
  spanImc.innerHTML = imcValue.toFixed(2);

  //message with result
  let status;
  let info;

  if(parseFloat(imcValue.toFixed(2)) < 18.5){
    status = 'Bajo peso';
    info = 'Según la clasificación de la OMS, estas bajo peso. Se recomienda asistir a un Nutricionista o a atención médica para que evalue si es necesario una dieta o plan de salud.';
    spanStatus.innerHTML = status;
    spanInfo.innerHTML = info;
  }else if(parseFloat(imcValue.toFixed(2)) >= 18.5 && parseFloat(imcValue.toFixed(2)) <= 24.9){
    status = 'Aceptable';
    info = 'Según la clasificación de la OMS, estas saludable. Estas dentro de los margenes de la tabla.';
    spanStatus.innerHTML = status;
    spanInfo.innerHTML = info;
  }else if(parseFloat(imcValue.toFixed(2)) >= 25.0 && parseFloat(imcValue.toFixed(2)) <= 29.9){
    status = 'Sobrepeso';
    info = 'Según la clasificación de la OMS, estas sobrepeso. Se recomienda actividad física, una dieta saludable y cambiar hábitos sedentarios.';
    spanStatus.innerHTML = status;
    spanInfo.innerHTML = info;
  }else if(parseFloat(imcValue.toFixed(2)) >= 30.0 && parseFloat(imcValue.toFixed(2)) <= 34.9){
    status = 'Obesidad grado 1';
    info = 'Según la clasificación de la OMS, estas con obesidad grado 1. Debes de acudir a un médico o nutricionista para evitar posibles problemas de salud.';
    spanStatus.innerHTML = status;
    spanInfo.innerHTML = info;
  }else if(parseFloat(imcValue.toFixed(2)) >= 35.0 && parseFloat(imcValue.toFixed(2)) <= 39.9){
    status = 'Obesidad grado 2';
    info = 'Según la clasificación de la OMS, estas con obesidad grado 2. Estas en riesgo por lo que se aconseja acudir a un médico.';
    spanStatus.innerHTML = status;
    spanInfo.innerHTML = info;
  }else{
    status = 'Obesidad grado 3';
    info = 'Según la clasificación de la OMS, estas con obesidad grado 3. Estas en riesgo por lo que se aconseja acudir a un médico.';
    spanStatus.innerHTML = status;
    spanInfo.innerHTML = info;
  }

  //show box with result
  boxResult.classList.remove('off');
  boxResult.classList.add('on');

  //event to create the PDF document
  document.querySelector('#btn-imc-pdf').addEventListener('click', ()=>{

    //calculate min and max weight
    let minW = (Math.pow(parseH,2))*20;
    let maxW = (Math.pow(parseH,2))*25;
    
    createPDFImc(imcValue,n,s,status,info,minW,maxW);
  
  })
    
}