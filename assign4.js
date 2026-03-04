
let currentTab = "all"
const tabactive = ["bg-navy", "border-navy", "text-white"]
const inactive = ["bg-transparent", "text-slate-700", "border-state-200", "text-black"]

const allContainer = document.getElementById("all-container")
const interviewContainer = document.getElementById("interview-container")
const rejectContainer = document.getElementById("reject-container")
const emptySection=document.getElementById("empty")


function switchTab(tab) {

    const tabs = ["all", "interview", "rejected"]
    currentTab=tab

    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t)
        emptySection.classList.add("hidden")
        if (t === tab) {
            tabName.classList.remove(...inactive)
            tabName.classList.add(...tabactive)
        }
        else {
            tabName.classList.remove(...tabactive)
            tabName.classList.add(...inactive)
        }
    }
    const sections = [allContainer, interviewContainer, rejectContainer]
    for (const section of sections) {
        section.classList.add("hidden")

    }
    if (tab === "all") {
        allContainer.classList.remove("hidden")
        if(allContainer.children.length<1){
            emptySection.classList.remove("hidden")
        }
    }
    else if (tab === "interview") {
        interviewContainer.classList.remove("hidden")
        if(interviewContainer.children.length<1){
            emptySection.classList.remove("hidden")
        }
    }
    else {
        rejectContainer.classList.remove("hidden")
        if(rejectContainer.children.length<1){
            emptySection.classList.remove("hidden")
        }
    }
stats()
}

const totalStat = document.getElementById("stat-total")
const interviewStat = document.getElementById("stat-interview")
const rejectedStat = document.getElementById("stat-reject")
const available=document.getElementById("Available")
totalStat.innerHTML = allContainer.children.length

switchTab(currentTab)
document.getElementById("jobs-container").addEventListener("click", function (event) {
    const clickedElement = event.target
    
    const card=clickedElement.closest(".card")
    const badge=card.querySelector(".badge")
    const father=card.parentNode
    if (clickedElement.classList.contains("interview")) {
        badge.innerText="interviewd"
        interviewContainer.appendChild(card)
        stats()
    }
    if (clickedElement.classList.contains("rejected")) {
        badge.innerText="rejected"
        rejectContainer.appendChild(card)
        stats()
    }
    if (clickedElement.classList.contains("delete")) {
       father.removeChild(card)
       stats()
    }
})

function stats(){
    const counts={
        all:allContainer.children.length,
        interview:interviewContainer.children.length,
        rejected:rejectContainer.children.length
    }
    totalStat.innerText=counts.all
    interviewStat.innerText=counts.interview
    rejectedStat.innerText=counts.rejected
    available.innerText=counts[currentTab]
    if(counts[currentTab]<1){
        emptySection.classList.remove("hidden")
    }
    else{
        emptySection.classList.add("hidden")
    }
  
}
