function janken(r) {
    
    // r = 自分の手
    // c = コンピューターの手
    // j = 結果

    //0===グー
    //1===チョキ
    //2===パー

    let random = Math.random() *100;
    random = Math.floor(random %3);
    c=random
    console.log(random);
    // 表示する文字列を格納する変数
    let message = '';

    if (r === 1) {
        if(c===0){
            message = 'あなたはグー、コンピューターもグーなのであいこ';
        }
        else if(c===1){
            message = 'あなたはグー、コンピューターはチョキなのであなたの勝ち';
        }
        else if(c===2){
            message = 'あなたはグー、コンピューターはパーなのであなたの負け';
        }
    } else if (r === 2) {
        if(c===0){
            message = 'あなたはチョキ、コンピューターはグーなのであなたの負け';
        }
        else if(c===1){
            message = 'あなたはチョキ、コンピューターもチョキなのであいこ';
        }
        else if(c===2){
            message = 'あなたはチョキ、コンピューターはパーなのであなたの勝ち';
        }
    } else if (r === 3) {
        if(c===0){
            message = 'あなたはパー、コンピューターはグーなのであなたの勝ち';
        }
        else if(c===1){
            message = 'あなたはパー、コンピューターはチョキなのであなたの負け';
        }
        else if(c===2){
            message = 'あなたはパー、コンピューターもパーなのであいこ';
        }
    }
    
    console.log(message);

    var html_kekka = document.getElementById("kekka");
    html_kekka.innerHTML = message;

}