let users = [];

function addUser() {
    newUser = prompt("yeni uye ismini giriniz");
    users.push(newUser);
    console.log("liste guncellendi guncel liste:")
    for(const listUpdate of users){
        console.log(listUpdate);
    }
};

function filterUsers(){
    let search = prompt("aradigin kisinin ismini gir").toLowerCase();
        for (const searching of users) {
            if (search == searching) {
                let showSearching = users.indexOf(search)
                let sira = (users.indexOf(search) + 1);
                console.log("aradiginiz kisi bulundu bilgileri:\n " + sira +". sirada ismi: " + users[showSearching]);
                return
            }else{
                console.log("kullanici bulunamadi")
            }
        }
};

function getInput(){
    let manyUsers = Number(prompt("kac kisi gireceksin"));
    for (let i = 0; i < manyUsers; i++) {
        let userName = prompt( i + 1+ ". uye ismini giriniz")
        users.push(userName);
    }
    console.log("guncel liste:")
    for(const listNames of users){
        console.log(listNames);
    };
};