const fetchingUserData = async () => {
  const apiUrl = `https://openapi.programming-hero.com/api/retro-forum/posts`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const userData = data.posts;
  userAllData(userData);
  // userVewData(userData);
};

const searchTextUserData = async (searchText) => {
  const apiUrl = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const userData = data.posts;
  userAllData(userData);
};

const userAllData = (userData) => {
  const usersDataBox = document.getElementById("usersDataBox");
  usersDataBox.textContent = "";
  userData.forEach((userinfo) => {
    const userDataDivBox = document.createElement("div");
    userDataDivBox.classList = `w-[100%] mb-4  rounded-3xl bg-slate-300 p-10 flex flex-row gap-x-10 gap-y-5`;
    userDataDivBox.innerHTML = `
         <div class="w-[10%]">
                <div class="relative w-20 h-20 bg-red-400 rounded-lg flex items-center justify-center">
                    <img class= "w-20 h-20 rounded-lg" src="${userinfo.image}" alt="">
                    <div id= "isActive" class="w-4 h-4 bg-green-500 rounded-full absolute -top-1 -right-1"></div>
                </div>
                </div>
                <div class="w-[90%]">
                <div class="flex flex-row gap-10">
                    <p>#<samp>${userinfo.category}</samp></p>
                    <p>Author : <samp>${userinfo.author.name}</samp></p>
                </div>
                <div class="mb-4">
                    <h1 id= "userinfoTitle" class="text-2xl text-black font-bold my-4">${userinfo.title}</h1>
                    <p>${userinfo.description}</p>
                </div>
                <hr>
                <div class="flex flex-row justify-between items-center mt-5">
                    <div class="flex flex-row gap-x-5 items-center justify-center">
                        <div class="flex flex-row gap-x-5 items-center justify-center"><img src="images/messageBox.png" alt=""><samp>${userinfo.comment_count}</samp></div>
                        <div  class="flex flex-row gap-x-5 items-center justify-center"><img src="images/viseat-i.png" alt=""><samp id= "userinfoViewCount" >${userinfo.view_count}</samp></div>
                        <div  class="flex flex-row gap-x-5 items-center justify-center"><img src="images/watching.png" alt=""><samp>${userinfo.posted_time}</samp></div>
                    </div>
                    <div  class=" cursor-pointer">
                    <img id= "clickEvent" onclick="dataPass()" src="images/inbpx.png" alt="">
                   
                    </div>
                </div>
                </div>`;
    usersDataBox.appendChild(userDataDivBox);

    const isActiveUser = document.getElementById("isActive");
    
    if (!userinfo.isActive === true && userinfo.isActive == false ) {
      isActiveUser.classList.add("bg-red-400");
    } 
    else{
      isActiveUser.classList.add("bg-green");
    }
  });  
};
// const clickEvent = document.getElementById('clickEvent');
// clickEvent.addEventListener("click", function(e){ 
//             alert("Hello World!");
//  });






let MarkAsRead = document.getElementById('MarkAsRead');
  function dataPass(){
    const userinfoTitle = document.getElementById('userinfoTitle').innerHTML;
    const userinfoVew = document.getElementById('userinfoViewCount').innerHTML;
    console.log(userinfoTitle);
    console.log(userinfoVew);

    


    const userVawInfoBox = document.getElementById("userVawInfoBoxArea");
    const createUserDiv = document.createElement("div");   
    createUserDiv.innerHTML =`
    <div class="flex flex-grow justify-between items-center bg-white p-4 mt-4 rounded-2xl">
    <h1 id= "userTitle">${userinfoTitle}</h1>
    <div class="flex items-center"><img src="images/viseat-i.png" alt=""><samp>${userinfoVew}</samp></div>
    </div>`;
  userVawInfoBox.appendChild(createUserDiv); 
};


const searchControl = () => {
  const searchInputArea = document.getElementById("searchInput");
  const searchText = searchInputArea.value;
  // console.log(searchText);
  searchTextUserData(searchText);
};

const userLatestPostApiFetching = async () => {
  const apiUrl = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  const latestPostData = data;
  userLatestPost(latestPostData)
  // console.log(latestPostData);
 
};

const userLatestPost =(latestPostData) =>{
  const latestPostArea = document.getElementById('latest');
  latestPostData.forEach((latestPost) =>{
    console.log(latestPost)
    const createLatestPostCard =document.createElement('div');
    createLatestPostCard.classList =`card w-96 bg-base-300 shadow-xl`;
    createLatestPostCard.innerHTML =`<figure class="py-4 px-9">
    <img
      class="rounded-xl"
      src="${latestPost.cover_image}"
      alt="Shoes"
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title font-bold">
      ${latestPost.title}
    </h2>
    <p>
      ${latestPost.description}
    </p>
    <div class="card-actions">
      <div class="flex flex-row gap-4 items-center">
        <div>
          <img
            class="w-10 h-10 rounded-full"
            src="${latestPost.profile_image}"
            alt=""
          />
        </div>
        <div>
          <h1 class="font-bold text-black">${latestPost.author.name}</h1>
          <p>Unknown</p>
        </div>
      </div>
    </div>
  </div>`;
  latestPostArea.appendChild(createLatestPostCard);
  });

}



fetchingUserData();
userLatestPostApiFetching()
