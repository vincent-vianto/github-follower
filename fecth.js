const idf=window.prompt("mw cari tahu siapa?(ketik username github)")

const URL= `https://api.github.com/users/${idf}`

axios.get(URL)
.then(res => {
    console.log(res);
    const listHTML= document.getElementById('profile')
    
    const data = res.data
    const{login,avatar_url,bio,company}= data;
    const itemHTML=`
    <img class ="img-pro" src="${avatar_url}">
    <h2 class="display-3"> ${login}</h2>
    
    <br>`
    listHTML.innerHTML = itemHTML
})


const FollowerURL = `https://api.github.com/users/${idf}/followers`

axios.get(FollowerURL)
.then(res => {
    console.log(res)
    const listHTML= document.getElementById('followers')
    const data = res.data

    data.forEach(item => {
        const{login,avatar_url}=item;
        const itemHTML=`<div class="col-sm-6 col-md-4">
        <img class ="img-foll" src="${avatar_url}">
        <br><br>
        <h2 class="mar-fol"> ${login}</h2>
        <a href="https://github.com/${login}"<button class="btn btn-primary"><i class="fab fa-github"></i>Follow</button></a>
        </div>
        <br>`
        listHTML.innerHTML += itemHTML
    });
    
})
.catch(err=>{
    console.error(err);
})

