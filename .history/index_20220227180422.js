
let myLeads=["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")


inputBtn.addEventListener("click", function(){
myLeads.push(inputEl.value)
console.log(myLeads)
})