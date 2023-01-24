export function subFormMets(element){

  const formMets = element.querySelector('#idMetsForm');
  formMets.addEventListener('submit', getDataMets);

  function getDataMets(e){
    e.preventDefault();

    const data = new FormData(formMets);

    const list = {
      age:    parseInt(data.get('age')),
      weight: parseInt(data.get('weight')),
      height: parseInt(data.get('height')),
      sex:    data.get('sex'),
      food:   parseInt(data.get('foods')),
      relax:  parseInt(data.get('relaxTime')),
      nap:    parseInt(data.get('nap')),
      hw:     parseInt(data.get('homework')),
      walk:   parseInt(data.get('walk')),
      wscore: data.get('walkscore'),
      job:    parseInt(data.get('job')),
      jscore: data.get('jobscore'),
      sport:  parseInt(data.get('sport')),
      type:   data.get('typesport'),
      sscore: data.get('sportscore')
    }
    
    validatorMetData(list)
    formMets.reset();
    element.querySelector('#walkscore').disabled = true;
    element.querySelector('#jobscore').disabled = true;
    element.querySelector('#typesport').disabled = true;
    element.querySelector('#sportscore').disabled = true;
  }
}

function validatorMetData(data){
  // console.log(isNaN(data.food))
  let answer = false;

  if(typeof(data.age) !== 'number' || data.age < 0 || isNaN(data.age) == true
    || typeof(data.weight) !== 'number' || data.weight < 0 || isNaN(data.weight) == true
    || typeof(data.height) !== 'number' || data.height < 0 || isNaN(data.height) == true
    || typeof(data.food) !== 'number' || data.food < 0
    || typeof(data.relax) !== 'number' || data.relax < 0
    || typeof(data.nap) !== 'number' || data.nap < 0
    || typeof(data.hw) !== 'number' || data.hw < 0
    || typeof(data.walk) !== 'number' || data.walk < 0
    || typeof(data.job) !== 'number' || data.job < 0
    || typeof(data.sport) !== 'number' || data.sport < 0
    || data.wscore == null || data.jscore == null 
    || data.sscore == null || data.type == null
    || data.sex == null
    )
    {
      answer = 'Ingresa datos validos. Si ingresaste un dato que habilita opciones, debes de seleccionar una opción'
    }

    if(isNaN(data.food) == true)  {data.food = 0}
    if(isNaN(data.relax) == true) {data.relax = 0}
    if(isNaN(data.nap) == true)   {data.nap = 0}
    if(isNaN(data.hw) == true)    {data.hw = 0}
    if(isNaN(data.walk) == true)  {data.walk = 0}
    if(isNaN(data.job) == true)   {data.job = 0}
    if(isNaN(data.sport) == true) {data.sport = 0}

    if(answer == false){
      return calculateCalories(data);
    }else{
      return fieldError(answer);
    }
}

function fieldError(errMsg){
  alert(errMsg);
}

function calculateCalories(dt){
  //recuerda que height en este caso no debe ser formateado ya que se toma en centimetros
  let respKcal;
  let mb;
  let tmb;

  if(dt.sex == 'm'){
    mb = 665.095 + (9.563 * dt.weight) + (1.8496 * dt.height) - (4.6756 * dt.age);
    tmb = mb / 1440;
  }else{
    mb = 66.4730 + (13.7516 * dt.weight) + (5.0023 * dt.height) - (6.755 * dt.age);
    tmb = mb / 1440;
  }

  //console.log(parseFloat(tmb.toFixed(1)))
  
  let kfood  =  (dt.food * 1.4 * tmb);
  let krelax =  (dt.relax * 1.2 * tmb);
  let knap   =  (dt.nap * 1.2 * tmb);
  let khw    =  (dt.hw * 2.7 * tmb);
  let kwalk;
  if(dt.wscore == 'baja')
  {
    kwalk  =  (dt.walk * 2.2 * tmb)
  }
  else if(dt.wscore == 'media')
  {
    kwalk  =  (dt.walk * 2.9 * tmb)
  }
  else if(dt.wscore == 'alta')
  {
    kwalk  =  (dt.walk * 5.5 * tmb)
  }
  else{
    kwalk = 0;
  }

  let kjob;
  if(dt.jscore == 'baja')
  {
    kjob  =  (dt.job * 2.2 * tmb)
  }
  else if(dt.jscore == 'media')
  {
    kjob  =  (dt.job * 2.9 * tmb)
  }
  else if(dt.jscore == 'alta')
  {
    kjob  =  (dt.job * 5.5 * tmb)
  }
  else{
    kjob = 0;
  }

  let ksport;
  let mets = [
    [2,3,4],
    [4,6,8],
    [3,4,6],
    [6,10,14]
  ];

  if(dt.type == '1' ){
    if(dt.sscore = 'baja')
    {
      ksport = (dt.sport * mets[0][0] * tmb)
    }else if(dt.sscore = 'media')
    {
      ksport = (dt.sport * mets[0][1] * tmb)
    }else if(dt.sscore = 'alta')
    {
      ksport = (dt.sport * mets[0][2] * tmb)
    }
  }else if(dt.type == '2')
  {
    if(dt.sscore = 'baja')
    {
      ksport = (dt.sport * mets[1][0] * tmb)
    }else if(dt.sscore = 'media')
    {
      ksport = (dt.sport * mets[1][1] * tmb)
    }else if(dt.sscore = 'alta')
    {
      ksport = (dt.sport * mets[1][2] * tmb)
    }
  }else if(dt.type == '3')
  {
    if(dt.sscore = 'baja')
    {
      ksport = (dt.sport * mets[2][0] * tmb)
    }else if(dt.sscore = 'media')
    {
      ksport = (dt.sport * mets[2][1] * tmb)
    }else if(dt.sscore = 'alta')
    {
      ksport = (dt.sport * metsport[2][2] * tmb)
    }
  }else if(dt.type == '4')
  {
    if(dt.sscore = 'baja')
    {
      ksport = (dt.sport * mets[3][0] * tmb)
    }else if(dt.sscore = 'media')
    {
      ksport = (dt.sport * mets[3][1] * tmb)
    }else if(dt.sscore = 'alta')
    {
      ksport = (dt.sport * mets[3][2] * tmb)
    }
  }else{
    ksport = 0;
  }

  let kresidual = (((dt.food+dt.relax+dt.nap+dt.hw+dt.walk+dt.job+dt.sport)-1440) * 1.4 * tmb);
  respKcal = kfood+krelax+knap+khw+kwalk+kjob+ksport+kresidual;
  //para despues
  let kcal = document.querySelector('.kcal');
  kcal.innerHTML = Math.round(respKcal)+' kcal.'

  //open modal
  const resultMet = document.querySelector('.resultMet');
  resultMet.classList.remove('off');
  resultMet.classList.add('on');

  closerResult(resultMet);
}

function closerResult(resp){  
  const btnCloser = document.querySelector('.btnCloser');
  btnCloser.addEventListener('click',()=>{
    resp.classList.remove('on');
    resp.classList.add('off');
  })
}