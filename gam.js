console.log('hello!')

const bis=document.getElementById('dew')
const bes=document.getElementById('well')
const bas=document.getElementById('dell')
const las=document.getElementById('de')
let kas=document.getElementById('low').value
console.log(kas)


let dre=Math.floor(Math.random() * 10)
console.log(dre)

bis.onclick=function(){

    if(kas == dre){
       las.innerHTML='congratulation buddies! โค๐งก๐๐๐'
       las.style.color='green'
        }else{
            las.innerHTML= ' Oops! try again fellas ๐ฅ๐๐'
            las.style.color='red'
        }
    if(kas==null){ 
        las.innerHTML='please, input figure'
    }


    bas.innerHTML=parseInt(bas.innerHTML) - 1
    if(parseInt(bas.innerHTML) - 1 < 0){
        document.getElementById('dew').setAttribute("disabled", "disabled")
        bes.innerHTML='Oops! i am sorry, no more guesses'
    }

}
