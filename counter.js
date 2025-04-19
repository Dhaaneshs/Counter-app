let c=0
function incre (){
    c++;
    document.getElementById('cn').innerHTML=c;
}
function reset (){
    c=0;
    document.getElementById('cn').innerHTML=c;
}
function decre (){
    c--;
    document.getElementById('cn').innerHTML=c;
}
document.getElementById('inc').addEventListener('click',incre);
document.getElementById('dec').addEventListener('click',decre);
document.getElementById('res').addEventListener('click',reset);