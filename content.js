

const interval = setInterval(() => {
    const header = document.querySelector("._3euVJ");
    if (header) {
        console.log(header);
        clearInterval(interval);




        const button = document.createElement("button");
        button.innerHTML = "2"
        button.classList.add("botaoDoisSecond");


        button.addEventListener("click", ()=>{
            const audios = document.querySelectorAll("audio");
            console.log(audios)
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 2;
            
            })
        })


        header.appendChild(button);


    }
}, 1000);

