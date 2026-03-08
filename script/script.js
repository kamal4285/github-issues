
const allCardSection = document.getElementById('all-card-section');
const allIssuesCount = document.getElementById('all-issues');

function calculateCount(){
    allIssuesCount.innerText = allCardSection.children.length;
}
calculateCount();


const loadingSpinner = document.getElementById('loadingSpinner');

const allIssues = () => {
    loadingSpinner.classList.remove('hidden');
    loadingSpinner.classList.add('flex');
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(issues => displayAll(issues.data))
};
allIssues();



const displayAll = (cards) => {
    const allCardSection = document.getElementById('all-card-section');
    allCardSection.innerHTML = '';
    for(let card of cards){
        
        const allCard = document.createElement('div');
       
        allCard.innerHTML = `
            <div id="status-border" class="p-3 space-y-3 shadow border-t-4 h-full rounded-lg border-green-500">
                <div class="flex justify-between">
                    <img class="" src="assets/Open-Status.png" alt="">
                    <button class="bg-[#FEECEC] text-[#EF4444] py-0.5 px-5 rounded-full">${card.priority}</button>
                </div>
                <h2 class="text-sm font-semibold truncate">${card.title}</h2>
                <h3 class="text-[12px] text-[#64748B] line-clamp-2">${card.description}</h3>
                <div class="flex gap-4 justify-between">
                    <button class="bg-[#FEECEC] text-[#EF4444] border border-[#EF4444] py-0.5 px-2 rounded-full">${card.labels[0]}</button>
                    <button class="bg-[#FFF6D1] text-[#F59E0B] border border-[#F59E0B] py-0.5 px-2 rounded-full">${card.labels[1]}</button>
                </div>
                <div class="py-4 border-t-2 border-gray-300">
                    <h3 class="text-[12px] text-[rgb(100,116,139)]"># ${card.id} by ${card.author}</h3>
                    <h3 class="text-[12px] text-[#64748B]">${card.createdAt}</h3>
                </div>
            </div>
        `;
        // const statusB =document.getElementById('status-border');
        // if(card.status === "closed"){
        //     statusB.classList.remove('border-green-500');
        //     statusB.classList.add('border-purple-500');
        // }
        allCardSection.append(allCard);
        
    }
    calculateCount();
};


document.getElementById('open-tab')
    .addEventListener('click', function(){
        displayIssues();
        }
    )



function show(tabId){

    const tabs = document.querySelectorAll(".btn");

    tabs.forEach(tab=>{
        tab.classList.remove("btn-primary");
    });

    document.getElementById(tabId).classList.add("btn-primary");


    // FILTER LOGIC

    if(tabId === "all-tab"){
        displayIssues(allIssues);
    }

    if(tabId === "open-tab"){
        const openIssues = allIssues.filter(issue => issue.status === "open");
        displayIssues(openIssues);
        return;
    }

    if(tabId === "close-tab"){
        const closedIssues = allIssues.filter(issue => issue.status === "closed");
        displayIssues(closedIssues);
    }

}



const displayIssues = (cards) => {
    const openCardSection = document.getElementById('open-card-section');
    openCardSection.innerHTML = '';
    for(let card of cards){
        
        const openCard = document.createElement('div');
       
        openCard.innerHTML = `
            <div id="status-border" class="p-3 space-y-3 shadow border-t-4 h-full rounded-lg border-green-500">
                <div class="flex justify-between">
                    <img class="" src="assets/Open-Status.png" alt="">
                    <button class="bg-[#FEECEC] text-[#EF4444] py-0.5 px-5 rounded-full">${card.priority}</button>
                </div>
                <h2 class="text-sm font-semibold truncate">${card.title}</h2>
                <h3 class="text-[12px] text-[#64748B] line-clamp-2">${card.description}</h3>
                <div class="flex gap-4 justify-between">
                    <button class="bg-[#FEECEC] text-[#EF4444] border border-[#EF4444] py-0.5 px-2 rounded-full">${card.labels[0]}</button>
                    <button class="bg-[#FFF6D1] text-[#F59E0B] border border-[#F59E0B] py-0.5 px-2 rounded-full">${card.labels[1]}</button>
                </div>
                <div class="py-4 border-t-2 border-gray-300">
                    <h3 class="text-[12px] text-[rgb(100,116,139)]"># ${card.id} by ${card.author}</h3>
                    <h3 class="text-[12px] text-[#64748B]">${card.createdAt}</h3>
                </div>
            </div>
        `;
        
        openCardSection.append(openCard);
    }
    calculateCount();
};