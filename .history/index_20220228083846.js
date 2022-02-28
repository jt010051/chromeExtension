
let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn =document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const tabs =[

    {url:"https://www.linkedin.com/in/jon-thomas-smith-16a239158/"}
]
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromStorage){
    myLeads = leadsFromStorage
    render(myLeads)
}
function render(leads){
    let listItems =""
    
    for(let i = 0; i<leads.length; i++){
        //listItems += "<li><a target ='_blank' href= '" +myLeads[i] +"'>"+myLeads[i]+"</a></li>"
        listItems += `
        <li>
             <a target ='_blank' href= '${leads[i]}'>
                 ${leads[i]}
             </a>
        </li> 
        ` 
    }
    ulEl.innerHTML =listItems
    }
deleteBtn.addEventListener('dblclick', function () {
localStorage.clear()
myLeads =[]
render(myLeads)
});
inputBtn.addEventListener("click", function(){
    
myLeads.push(inputEl.value)
inputEl.value = ""
  
   localStorage.setItem("myLeads", JSON.stringify(myLeads) )
render(myLeads)  
console.log(localStorage.getItem("myLeads"))
})

tabBtn.addEventListener("click", function(){
    
console.log("https://www.linkedin.com/in/jon-thomas-smith-16a239158/")
    })
