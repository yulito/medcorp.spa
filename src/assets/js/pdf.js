export function createPDFImc(imc,name,sex,status,info,min,max){
    let arr = {
        nombre:name,
        sexo:sex,
        imc:imc.toFixed(2),
        estado:status,
        descripcion:info,
        min:min.toFixed(2),
        max:max.toFixed(2)
    }
       
    const today = new Date();
    var doc = new jsPDF();

    //title
    doc.setFontSize(20);
    doc.setTextColor(5, 105, 5);
    doc.text(20,10,'Informe de resultado IMC ----> Fecha: '+today.toLocaleDateString()); 
    
    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (14),'-----------------------------------------------------------');
    
    //data
    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (30),'Nombre: '+arr.nombre+' - Sexo: '+arr.sexo);

    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (40),'IMC: '+arr.imc);

    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (50),'Estado: '+arr.estado);

    let pieces = arr.descripcion.split('.',2);

    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (60),'Descripción: '+pieces[0]+'.');

    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (70), pieces[1]+'.');

    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (74),'-----------------------------------------------------------');

    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (80), 'Peso mínimo: '+arr.min+' Kg.');

    doc.setFontSize(12);
    doc.setTextColor(0,0,0);
    doc.text(20, (90), 'Peso máximo: '+arr.max+' Kg.');

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 255);
    doc.text(20, (100),'MEDCORP - Desarrollado por Jullián Amigo');

    doc.save('medcorp_imc_.pdf');
}