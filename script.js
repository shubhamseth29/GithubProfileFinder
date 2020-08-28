var form=document.getElementById("myform")
form.addEventListener('submit',function(e){
    e.preventDefault()
    var username=document.getElementById("username").value;
    
    fetch("https://api.github.com/users/"+username)
    .then((result)=>result.json())
    .then((data)=>{
        console.log(data);
        document.getElementById("data").innerHTML=
        `<div class="cardContainer"><div class="card" style="width: 18rem;margin-left:36%">
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
          <a href= "https://shubhamseth29.github.io/GithubProfileFinder/" class="card-link">Find Another </a>
        </div>
      </div></div>`
    })
    
    fetch("https://api.github.com/users/"+username+"/repos")
    .then((result)=>result.json())
    .then((repo)=>{
        console.log(repo)
        

        let output=`<h2 class="mb-4 alert alert-danger" id="repoHead" style="text-align:center;">REPOSITORIES</> `
         repo.forEach((i)=>{
             output+=
                    `
                     <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                          <a href="${i.html_url}" target="_blank"  id="repoBtn" class="btn btn-link btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            ${i.name}
                            </a>
                            </h2>
                          </div>
                      
                          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div class="card-body">
                            <div class="col-md-7">
                            Description:${i.description}
                            </div>
                            <div class="col-sm-3">
                            <span class="badge badge-dark">Forks: ${i.forks_count}</span>
                            <span class="badge badge-primary">Watchers: ${i.watchers_count}</span>
                            <span class="badge badge-success">Stars: ${i.stargazers_count}</span>
                            </div>
                            <div class="col-md-7">
                            <a href="${i.html_url}" target="_blank" class="btn btn-dark">Click here to go to the Repo Page</a>
                            </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      `

                })
            
        
        document.getElementById("repo").innerHTML=output;

      
      //NOT WORKING   
        // document.getElementById("repoBtn").addEventListener('onclick',(e)=>
        // {
        //   alert("hi")
        //   document.getElementById("collapseOne").classList.add("show");
        
        // })
         
       
      
            
        })

    })



