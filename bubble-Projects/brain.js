// create rendom color generator bubble color
const container = document.querySelectorAll(".bubbles");
let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
let concatinate = "#";
let tracker = 0;
(function () {
    container.forEach(function (item) {
        for (let index = 0; index < 6; index++) {
            let index_data = colors[Math.floor(Math.random() * colors.length)];
            concatinate += index_data;
        }
        item.style.background = `linear-gradient(white,${concatinate})`;
        concatinate = "#";
    })
})()



container.forEach(function (item) {

    // console.log(tracker)
    item.addEventListener('mousemove', function bubble_sot() {
        tracker++;
        if (tracker === 24) {
            let bubble_background = document.querySelector(".container");
            // bubble_background.style.height = "20vh";
            bubble_background.style.width = "30%";
            bubble_background.style.lineHeight = "8rem"
            bubble_background.style.marginTop = "6rem"
            bubble_background.innerHTML = `<span style="color: #00ff00; margin-bottom: 3rem;">Great!</span> All ballons are poped`;
            let cheer_audio = new Audio('cheer2.mp3');
            cheer_audio.play();

        }
        // console.log(tracker)
        
        setTimeout(() => {
            let audio = new Audio('pop.mp3');
            audio.play();
            item.innerHTML = "pop!";
            item.style.cssText = "background: none;"

            // item.style.color = textcolor;
        }, 200);

        item.style.transition = "transform 200ms ease-in";
        item.style.transform = "scale(1.2)";
        // item.style.cssText = "transition: transform 500ms ease-in; transform: scale(1.2);"
        item.removeEventListener('mousemove', bubble_sot)
    })
})

// console.log(tracker)
