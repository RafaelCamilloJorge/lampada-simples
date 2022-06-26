const turnONOFF = document.getElementById('turnONOFF');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf ('quebrada') > -1; 

}
    
    function lampON(){
        if( !isLampBroken()){
            lamp.src = './img/ligada.jpg';
            
        }
    }
    
    function lampOFF(){
        if ( !isLampBroken()) {
            lamp.src = './img/desligada.jpg';
        }
    }

    function lampBroken(){
        lamp.src = './img/quebrada.jpg';
        turnONOFF.textContent = 'Concertar!';
    }

    function Concerto(){
        if(turnONOFF.textContent === 'Concertar!'){
            lamp.src = './img/desligada.jpg';
            turnONOFF.textContent = 'Ligar';
        }
    }

    function lampONOFF(){
        if(!isLampBroken()){
        if(turnONOFF.textContent == 'Ligar'){
            lampON();
            turnONOFF.textContent = 'Desligar';
        } else{
            lampOFF();
            turnONOFF.textContent = 'Ligar';
        }
    }
    }

turnONOFF.addEventListener('click', lampONOFF);
lamp.addEventListener('mouseover', lampON);
lamp.addEventListener('mouseout', lampOFF);
lamp.addEventListener('dblclick', lampBroken);
turnONOFF.addEventListener('click', Concerto);