document.addEventListener("DOMContentLoaded", function (e) {
    const button = document.querySelector("#button")
    const joke = document.querySelector("#joke")
    //const jokeImage = document.querySelector("#jokeImage")
    const url = "https://icanhazdadjoke.com"
    // const body = document.querySelector("body")
    e.preventDefault()
    button.addEventListener("click", function () {
        //const url = "https://icanhazdadjoke.com"
        
        fetch(url, {
            headers: {"Accept": "application/json"}
        })
            .then(function(data) {
                return data.json()
            })
            .then(function(jsonData) {
                console.log(jsonData)
           // jokeImage. = `${url}/j/${jsonData.id}.png`
                const img = document.createElement("img")
                img.src = `${url}/j/${jsonData.id}.png`
                joke.append(img)
                console.log(img)
            })
                while(joke.firstChild) {
                joke.removeChild(joke.firstChild)
            }
        
    })
})

