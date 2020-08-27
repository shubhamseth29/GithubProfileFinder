var form=document.getElementById("myform")
form.addEventListener('submit',function(e){
    e.preventDefault()
    var username=document.getElementById("username").value;
    
    fetch("https://api.github.com/users/"+username)
    .then((result)=>result.json())
    .then((data)=>{
        console.log(data);
        document.getElementById("data").innerHTML=
        `<div class="card" style="width: 18rem , margin=0px 40%" >
        <img src="${data.avatar_url}" class="card-img-top" alt="User profile picture">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">Bio-: ${data.bio}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Member Since: ${data.created_at}</li>
          <li class="list-group-item">Followers: ${data.followers}</li>
          <li class="list-group-item">Following: ${data.following}</li>
        </ul>
        <div class="card-body">
          <a href="${data.html_url}" class="card-link">View Profile</a>
          <a href="https://shubhamseth29.github.io/GithubProfileFinder/" class="card-link">Find Another </a>
        </div>
      </div>`

    })
    
})


