import {pages} from "../controllers/pages";

const router = async (route) =>{
    let content = document.getElementById("main");
    content.innerHTML = "";


    function formatSelect(id){

        let navSelected = document.querySelector('.selectNav');
        navSelected.classList.remove('selectNav');
        
        let nav = document.getElementById(id);
        nav.classList.add('selectNav');
       
    }

    //console.log(route)
    switch(route){
        case "":{
            formatSelect("idHome");
            return content.appendChild(pages.home());
        }
        case "#/":{
            formatSelect("idHome");
            return content.appendChild(pages.home());
        }
        case "#/imc":{
            formatSelect("idImc");
            return content.appendChild(pages.imc());
        }
        case "#/mets":{
            formatSelect("idMets");
            return content.appendChild(pages.mets());
        }
        case "#/tabla-calorias":{
            formatSelect("idTc");
            return content.appendChild(pages.kcal());
        }
        default:{
            return content.appendChild(pages.notFound());
        }
    }
};

export {router};