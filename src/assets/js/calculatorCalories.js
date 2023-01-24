export function calories(element){
    let grp = element.querySelector('#grp');
    let grl = element.querySelector('#grl');
    let grc = element.querySelector('#grc');

    let rp = element.querySelector('.rp');
    let rl = element.querySelector('.rl');
    let rc = element.querySelector('.rc');

    let total = element.querySelector('.total');

    let vp = 0;
    let vl = 0;
    let vc = 0;

    grp.addEventListener('change',(e)=>{
        e.preventDefault()
        vp = grp.value * 4;
        rp.innerHTML = vp+' kcal';
        vtotal()
    })

    grl.addEventListener('change',(e)=>{
        e.preventDefault()
        vl = grl.value * 9;
        rl.innerHTML = vl+' kcal';
        vtotal()
    })

    grc.addEventListener('change',(e)=>{
        e.preventDefault()
        vc = grc.value * 4;
        rc.innerHTML = vc+' kcal';
        vtotal()
    })
    
    function vtotal(){
        let sum = vp + vl + vc;
        total.innerHTML = sum +' kcal';
    }
}