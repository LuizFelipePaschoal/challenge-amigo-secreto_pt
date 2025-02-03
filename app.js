let friends = [];
let list = document.getElementById('friendsList');
list.innerHTML = '';

function addFriend(){
    let nameField = document.getElementById('friend')
    let name = nameField.value;
    if (name === ''){
        alert('Por favor, insira um nome.')
        return;
    }
        if (friends.includes(name)) {
            alert('nome duplicado, insira outro');
            return
        }
    friends.push(name)
    clearField();
    updateList();
    console.log(name);
} 

// inserir name numa list no HTML
function updateList(){
    let list = document.getElementById('friendsList')
    list.innerHTML = '';
    friends.forEach(function(name) {
    list.innerHTML += `<li>${name}</li>`
    })
    }

updateList();

function drawFriend(){
    if (friends.length === 0){
        alert('A lista de amigos esta vazia! Adicione um nome para sortear')
        return;
    }
    let randomFriends = Math.floor(Math.random() * friends.length);
    let luckyFriend = friends[randomFriends];
    document.getElementById("resultado").innerHTML = `🎉 O amigos secreto é: <strong>${luckyFriend}</strong>`;
    friends.splice(randomFriends, 1);
    updateList();
} 

function clearField(){
    let name = document.getElementById('friend')
    name.value = '';
    
}
