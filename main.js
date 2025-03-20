

    let T = [["A1000","layla","benyader","lay151@gmail.com","06111000"],["A10001","Ahmad","ali","ahm45@gmail.com","060024240"],["A10002","mohamed","benmohamed","moh1gmail.com","0600000"]];
    let ob = document.getElementById("s1");
    for(let i=0;i<T.length;i++){
        let opt=document.createElement("option")
        opt.text=T[i][0]
        ob.appendChild(opt)
    }
    let nom =document.getElementById("Nom")
    let prenom =document.getElementById("Prenom")
    let CIN =document.getElementById("CIN")
    let mail =document.getElementById("mail")
    let tel =document.getElementById("tel")


function afficher(f){
    let obj=document.getElementById("s1")
    let ind=obj.selectedIndex
    for(let i=0;i<T.length;i++){
        if(T[i][0]==obj.options[ind].value){
            nom.value=T[i][1]
            prenom.value=T[i][2]
            CIN.value=T[i][0]
            mail.value=T[i][3]
            tel.value=T[i][4]

        }
    }
}
let ob2 = document.getElementById("s2");  // Select element

function enregistrerfor() {
    let nom2 = document.getElementById("Nom2");
    let prenom2 = document.getElementById("Prenom2");
    let CIN2 = document.getElementById("CIN2");
    let mail2 = document.getElementById("mail2");
    let tel2 = document.getElementById("tel2");

    
    if (CIN2.value && nom2.value && prenom2.value && mail2.value && tel2.value) {
        
        let newetudiant = [CIN2.value, nom2.value, prenom2.value, mail2.value, tel2.value];
        T.push(newetudiant);

        
        let opt2 = document.createElement("option");
        opt2.text = CIN2.value;
        ob.appendChild(opt2);

        
        CIN2.value = "";
        nom2.value = "";
        prenom2.value = "";
        mail2.value = "";
        tel2.value = "";
        alert("Étudiant enregistré avec succès !");
    } else {
        alert("Veuillez remplir tous les champs !");
    }
}
function permutter() {
    
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");

    let temp = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = temp;
}