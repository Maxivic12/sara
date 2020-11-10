function encrypt(word) {
    var lettresPaires = new Array();
    var lettresImpaires = new Array();
    if (word.length % 2 === 0){
        for (var i = 0; i <= word.length-2; i += 2){
            lettresPaires.push(word[i]);
            lettresImpaires.push(word[i+1]);                                                                                                                      
        }
        return lettresPaires.concat(lettresImpaires).join('');
    }else{
        return false;
    }    
}

function connectWithCode(code) {
    if('cuiorr' == encrypt(code)){
        document.getElementById('no-correct-code').style.display = 'none';
        document.getElementById('correct-code').style.display = 'block';
    }else{
        document.getElementById('false-code').className = 'bouger';
        setTimeout(function() {
            document.getElementById('false-code').className = 'still';
        }, 4000);
    }
}

function clic(){
    var input = document.getElementById('texteInput');
    connectWithCode(input.value);
}
    

