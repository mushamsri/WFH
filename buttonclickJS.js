document.querySelector('#remove').addEventListener('click',function(e){
    //to change the content on the button
    console.log('removed')

})
/*document.querySelector('#changed').addEventListener('click',function(e){
    e.target.textContent="content changed"
})*/

document.querySelector('#changed').addEventListener('click',function(){
    document.querySelectorAll('.paras').forEach(function(para){
    para.remove()
    })
})