let form = document.querySelector('.form');
let uName = document.querySelector('#userName');
let role = document.querySelector('#role');        // added
let bio = document.querySelector('#bio');
let photo = document.querySelector('#photo');
let content = document.querySelector('.content');
// removed: let del = document.querySelector('.delBtn');

const userManager = {
    users: [],
    init: function(){
        form.addEventListener('submit', this.submitForm.bind(this));
    },
    submitForm: function(e){
        e.preventDefault();
        this.addUser();
        form.reset();
        this.renderUI();
    },
    addUser: function(){
        this.users.push({
            id: Date.now(),                        // unique id
            uName: uName.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });
    },
    renderUI: function(){
        content.innerHTML = '';
        this.users.forEach((user) => {             // arrow function
            let userDiv = document.createElement('div');
            userDiv.classList.add('user');
            let close = document.createElement('button');
            close.classList.add('delBtn');
            let i = document.createElement('i');
            i.classList.add('ri-close-line');
            let imgDiv = document.createElement('div');
            imgDiv.classList.add('img');
            let imgTag = document.createElement('img');
            imgTag.classList.add('uImg');          // class instead of duplicate id
            imgTag.src = user.photo;
            let h4 = document.createElement('h4');
            h4.textContent = user.uName;
            let h5 = document.createElement('h5');
            h5.textContent = user.role;
            let p = document.createElement('p');
            p.textContent = user.bio;

            close.addEventListener('click', () => this.removeUser(user.id));

            close.appendChild(i);
            userDiv.appendChild(close);
            imgDiv.appendChild(imgTag);
            userDiv.appendChild(imgDiv);
            userDiv.appendChild(h4);
            userDiv.appendChild(h5);
            userDiv.appendChild(p);
            content.appendChild(userDiv);
        });
    },
    removeUser: function(id){
        this.users = this.users.filter(user => user.id !== id);
        this.renderUI();
    },
};
userManager.init();