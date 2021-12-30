const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'



document.addEventListener('DOMContentLoaded', ()=>{
    

    fetch(imgUrl)
    .then(res=>res.json())
    .then(res=> {
        let obj = res.message
        for(let el of obj){
            let img = document.createElement('img');
            img.setAttribute('src', el)
            const div = document.querySelector("#dog-image-container").appendChild(img)
            
        }
    })

    fetch(breedUrl)
    .then(res => res.json())
    .then(res=> { 

        

        let obj = res.message
      
        for(let el in obj){
            let li = document.createElement('li')
            li.textContent = el;
            let ul = document.querySelector("#dog-breeds").appendChild(li)
            li.addEventListener('click', ()=>{
                li.style.backgroundColor = "#eee"
            })
            

           
            
            
            
        }
        
    })

    const sel = document.getElementById("breed-dropdown");
        sel.addEventListener('change', ()=>{
            let option = sel.value    
                          
            let arr = document.querySelectorAll('li')
            
            for(let word of arr){
                if(word.textContent[0] === option){
                    word.style.display = "block"
                }
                else{
                    word.style.display = "none"
                }
                
            }
            
       
       
    
    })


})

