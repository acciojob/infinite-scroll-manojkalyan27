//your code here!
const infiList = document.querySelector('#infi-list');
let countItem = 1;
function addList(count){
  for(let i=1;i<=count;++i){
    const list = document.createElement('li');
    list.textContent =`list item${countItem++}`
    infiList.appendChild(list);
  }
}

addList(10);

infiList.addEventListener('scroll', ()=>{
  if(infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight -1 ){
    addList(2);
  }
});

// scrollTop: How much has been scrolled vertically.
// clientHeight: The visible height of the container.
// scrollHeight: The total height of the content.
