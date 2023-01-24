export function listenChange(element){
    //event change from select
    const walk = element.querySelector('#walk');
    const walks = element.querySelector('#walkscore');

    const job = element.querySelector('#job');
    const jobs = element.querySelector('#jobscore');

    const sport = element.querySelector('#sport');
    const types = element.querySelector('#typesport');
    const sports = element.querySelector('#sportscore');

    walk.addEventListener('change',()=>{
        walks.disabled = false;
    })

    job.addEventListener('change',()=>{
        jobs.disabled = false;
    })

    sport.addEventListener('change',()=>{
        types.disabled = false;
    })

    types.addEventListener('change',()=>{
        sports.disabled = false;
    })
}