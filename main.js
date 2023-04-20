const btn = document.querySelector(".sabt");
const ul = document.getElementById("ul-asli");
let num = 0;
let n2 = 0;



btn.addEventListener("click" , (e) => {
    e.preventDefault();
    num += 1;
    n2 = num + 1;
    const text = document.querySelector(".text-in").value;
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="btn-tik" id="${num}">
        <button class="l">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </button>
        <button class="r">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          
        </button>
    </div>
    <h3 id="${n2}" class="hhh">${text}</h3>

    `;
    ul.appendChild(li);
    saveLocalStorage(text);
    document.querySelector(".text-in").value = ""
})


ul.addEventListener("click" , (e) => {
    const t = document.querySelector(".hhh");
    
    const tak = e.target.parentNode.parentNode;

    if (e.target.parentNode.className === "l") {
        let id = tak.id;
        id = parseInt(id) + 1;
        console.log(id);
        const ttt = document.getElementById(id);
        const hhh = document.getElementById(id);
        if (hhh.classList[0] === "hhh") {
            hhh.className = "hhh-off";
        } else if (hhh.classList[0] === "hhh-off") {
            hhh.className = "hhh";
        }
    } else if (e.target.parentNode.className === "r") {
        const r = e.target.parentNode.parentNode.parentNode;
        r.remove();
        const text = r.childNodes[3].innerHTML;
        let arry = [];
        const storage = window.localStorage.getItem("todo");
        arry = JSON.parse(storage);
        const array2 = arry.filter(e => e != text);

        window.localStorage.setItem("todo" , JSON.stringify(array2))
    }


})

const saveLocalStorage = (ev) => {
    let arry = [];
    const storage = window.localStorage.getItem("todo")
    console.log(JSON.parse(storage));
    if(JSON.parse(storage) === null) {
        arry.push(ev)
        window.localStorage.setItem("todo" , JSON.stringify(arry))
        
    } else {
        arry = JSON.parse(storage)
        arry.push(ev)
        window.localStorage.setItem("todo" , JSON.stringify(arry))
    }

}

const loadingFunc = () => {
    let arry = [];
    const storage = window.localStorage.getItem("todo")
    if(JSON.stringify(storage) === null){
        console.log("NULL");
    } else {
        arry = JSON.parse(storage);
        arry.map((e) => {
            console.log(e);
            num += 1;
            n2 = num + 1;
            const text = e;
            const li = document.createElement("li");
            li.innerHTML = `
            <div class="btn-tik" id="${num}">
                <button class="l">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </button>
                <button class="r">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  
                </button>
            </div>
            <h3 id="${n2}" class="hhh">${text}</h3>
        
            `;
            ul.appendChild(li);

        })
    }
 }