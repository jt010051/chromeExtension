
let myLeads=[]
const inputEl=document.getElementById("input-el").value
const inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function(){
myLeads.push(inputEl)
console.log(myLeads)
})