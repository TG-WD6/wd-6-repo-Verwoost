let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log('button clicked');

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log('Failure');
        
    }else{
        msg.innerHTML = "";
        console.log('Success');
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data['text'] = input.value;
    createPost();
    console.log(data);
};

let createPost = () => {
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>`;

  input.value = "";
};

let deletePost = (element) => {
    element.parentElement.parentElement.remove();
};

let editPost = (element) => {
    input.value = element.parentElement.previousElementSibling.innerHTML;
    element.parentElement.parentElement.remove();
};