"use strict";


const tagInput = document.querySelector("#tag-input")

const tags = document.querySelector(".tags");


tagInput.onpaste =function(){
 alert("false")
 return false;
}




tagInput.onkeydown =function(e)
{
    if(e.keyCode===13 || e.keyCode===9)
    {
    const tagText =tagInput.value.trim();
    if(tagText.length>0)
    {
       
        const newDiv = document.createElement("div");
        newDiv.classList.add("tag");
        newDiv.innerText = tagText;
        const iClass = document.createElement("i");
        iClass.classList.add("fas" ,"fa-times");
        newDiv.appendChild(iClass);
        iClass.onclick = function()
        {
            newDiv.remove()
        }
        
        const element =[...tags.children].find(n => n.innerText == tagInput.value)
        if(element!==undefined){
            alert("be clever")
            element.remove();
            
        }
        tags.insertBefore(newDiv ,tagInput.previousElementSibling);
        tagInput.value ="";

        

        if(e.keyCode===9){
            e.preventDefault();
            tagInput.focus();
           }
        }
    }
}