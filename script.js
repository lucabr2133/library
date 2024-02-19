const myLibrary=[];
const modal=document.querySelector(".modal");
const title=document.getElementById("title");
const author=document.getElementById("author");
const pages=document.getElementById("pages");
const read=document.getElementById("read");
const createButton=document.getElementById('button');
const openbutton=document.querySelector(".openbtn");
const dialog=document.querySelector(".dialog");
const closebtn=document.querySelector("#closebtn");
const container=document.querySelector(".container");
const body=document.querySelector("body")
let i=0;
let three=0;
let id=0 ;
const div2=document.createElement("div");
let number=0
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.id=id;
   
}
function addBookToLibrary(){
    console.log(myLibrary)
    const book=new Book(title.value,author.value,pages.value,read.checked);
    console.log(book)
    console.log(myLibrary)
    myLibrary.push(book)
    console.log(myLibrary)
    add()
    id++
  
}
function add(){
    const div=document.createElement("div");
    div.classList.add(`${i}`,"er");
    let  {author,title,pages,read}=myLibrary[i];
    div.innerHTML+=` <b>Title: ${title}</b>  <br><b>Author: ${author} </b> <br> <b>Pages: ${pages}</b> <br> <button  class="read${id}">Read: ${read}</button> <button class="deltebtn${id}" data-index="${id}">Remove</button> `
    div.dataset.index=id;
    container.appendChild(div)
    const readbtn=document.querySelector(`.read${id}`);
    if(read==false){
        readbtn.style.background="red";
    }else{
        readbtn.style.background="green";
       
    }
    const deltebtn=document.querySelector(`.deltebtn${id}`);
    deltebtn.addEventListener("click",(e)=>{
        console.log(div.dataset.index)
      myLibrary.splice(div.dataset.index,1);
        if(myLibrary.length==0){
            alert("fds")
            container.innerHTML=``;
            id=0
            i=0;
        }else{
            id=0
            i=0;
            container.innerHTML=``;
            for (let i = 0; i < myLibrary.length; i++) {
                if(myLibrary[i].title!=""){
                    add()
                    id++
                }else{
                    break
                } 
            }  
        }
    })
    
    readbtn.addEventListener("click",()=>{
        readbtn.style.background="green";
        if(read==false){
            readbtn.style.background="green";
            read=true
            readbtn.textContent="Read: true"
        }else{
            readbtn.style.background="red";
            read=false;
            readbtn.textContent="Read: false"
        }
    })
    
    i++
}


createButton.addEventListener("click",(e)=>{
    three=0
    e.preventDefault()
    if(title.value.length<3){
        title.placeholder="minimun value 3 caracters"
        title.value=``
        title.style.border="2px solid red"
    }else{
        three+=1
    }
    if(author.value.length<3){
        author.placeholder="minimun value 3 caracters"
        author.value=``
        author.style.border="2px solid red"
    }else{
        three+=1
    }
    if(pages.value.length<1){
        pages.placeholder="minimun value 1 caracter"
        pages.value=``
        pages.style.border="2px solid red"
    }else{
        three+=1
    }

    if(three==3){
        ischecked()
        addBookToLibrary()
  
        dialog.close()
        title.value=``;
        author.value=``;
        pages.value=``;
      
        console.log(container)
    }
   
});

openbutton.addEventListener("click",()=>{
    dialog.showModal()
    
});
closebtn.addEventListener("click",(e)=>{
   
    dialog.close();
});
function ischecked(){
    console.log(read.checked)
    if(read.checked){

        read.value="Yes"
    }else{
        read.value="no"
    }
}
