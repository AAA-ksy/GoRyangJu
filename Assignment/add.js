function add(genre, name, image, content){
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML=`
                    <img src="${image}" alt="${name}"/>
                    <span>${content}</span>`;
    
    document.querySelector(".container").appendChild(div);

    const span = document.createElement("span");
    span.innerHTML = genre;
    document.querySelector(".sidebar").appendChild(span);
}

function addHandle(e){
    e.preventDefault();   //현재 이벤트의 기본 동작 중단
    const genre = document.getElementById("genre").value;
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    add(genre,name,image,content);
    closeModal();
}

document.getElementById("addForm").addEventListener("submit", addHandle);