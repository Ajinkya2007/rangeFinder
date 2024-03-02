document.querySelector('.calc').addEventListener('click',()=>{
  let l = parseFloat(document.querySelector('.l').value);
  let w = parseFloat(document.querySelector('.w').value);
  let val = (l * w)
  let range = 0;
  if(val>=0.1 && val<=0.199 || val<0.1){
    range = 'P';
  }
  else if(val>=0.2 && val<=0.499){
    range = 'Q';
  }else{
    range = 'R';
  }
  document.querySelector('.result').innerHTML = 'Solution:  '+ range
})