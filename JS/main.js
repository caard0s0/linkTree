const socialMediaLinks = {
    twitter: "caard0s0_",
    twitch: "caard0s0_",
    instagram: "caard0s0_",
    linkedin: "in/caardoso",
    github: "caard0s0"
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
        const social = li.getAttribute("class")

        li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
    }
}

changeSocialMediaLinks()


function getGithubProfileInfos(){
    const url = `https://api.github.com/users/${socialMediaLinks.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userLink.href = data.html_url
        userLogin.textContent = data.login
        userImage.src = data.avatar_url
    })
}

getGithubProfileInfos()
