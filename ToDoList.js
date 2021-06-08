var btn = document.getElementById('btn');
    var info = document.getElementById('box')

    function myTask(a, b, c){
        this.nameOfTask = a
        this.creationDate = b
        this.status = c
    }
    var totalTask = document.getElementById('total')
    var id=0;
    var sum = 0;
    var ab = false;
    function addTask(){
       
     let taskkk = document.getElementById('task').value;
     let bool = false;
     if(taskkk == "") {
         alert("You haven't filled task box");
         bool = true;
     }
     if(!bool) {

    var task = new myTask(`${taskkk}`, new Date().toDateString(),'False')

    
     id++;
    var div = document.createElement('div');
    div.innerHTML = `<a id="tas${id}">Task:  <strong style="color:white;">${taskkk}</strong></a> <a>Date: ${new Date().toDateString()}</a> <a id='${id}'>Status: ${ab}</a> <button onclick="tog(${id})">Toggle</button> <button onclick="comp(${id})"><i class="fas fa-check"></i></button>
                      <button onclick="del(${id})"> <i class="fas fa-trash"></i></button>`
    div.setAttribute('id','taskBox')
    
   
   info.appendChild(div)
   document.getElementById('task').value = null;
  
   console.log(task)
   console.log(id)
   
    sum++;
    totalTask.innerHTML = `Total Task = ${sum}` }
   

    }
    btn.addEventListener('click', addTask)
    btn.addEventListener('keyPress',addTask)

    function del(id) {
            let p3 = document.getElementById(id)
            var parent = p3.parentElement
            parent.remove();
            let totalTask = document.getElementById('total');
            sum--;
            totalTask.innerHTML = `Total Task = ${sum}`
           
    }  
    function comp(id) {
         let p3 = document.getElementById(id)
         let parent = p3.parentElement
         parent.setAttribute('class', 'completed')
         console.log('parent:', parent)  
    }
    function tog(id) {
        let p = document.getElementById(id)
        if(p.innerHTML == `Status: false`) {
            p.innerHTML = `<a id="${id}">Status: true</a>`
        } else {
            p.innerHTML = `<a id="${id}">Status: false</a>`
        }

    }