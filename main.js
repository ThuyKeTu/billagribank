var olddate= 1684205347641
var oldtoken = 914667
var bill = document.getElementById("bill")
console.log(bill)
document.getElementById("download").onclick = function(){
    console.log("hello")
    
    downloadimg()

}

function gettime(){
    let today = new Date();
    let h=today.getHours()
    let m=today.getMinutes()
    let d=today.getDate()
    let mo=today.getMonth()+1
    let y=today.getFullYear()
    if(h<10) h = "0"+h
    if(m<10) m = "0"+m
    if(mo<10) mo = "0"+mo
    if(d<10) d = "0"+d

    let date =h+":"+m+" "+d+'/'+mo+'/'+y;
    let time = h+":"+m
    document.querySelector(".timetop").textContent = date
    document.querySelector(".timebot").textContent = date
    document.querySelector(".timehead").textContent = time
}


function gettoken(){
    let today = new Date();
    let token = (today.getTime() - olddate)/60000
    let rendertoken =oldtoken+parseInt(token)
    if(rendertoken >999999){
        rendertoken -=900000
    }
    document.querySelector(".token").textContent = rendertoken
}

function downloadimg(){
    html2canvas(document.querySelector("#bill")).then(canvas => {
        const link64 = canvas.toDataURL("image/png")
        var link = document.createElement('a')
        link.setAttribute("href",link64)
        link.setAttribute("download","bill.png")
        link.click()
        link.remove()
    });
}


var send = document.getElementById("psend")
var bank = document.getElementById("pbank")
var card = document.getElementById("pcard")


send.oninput = function(){
    document.querySelector(".name").textContent = send.value
    gettime()
    gettoken()
};

bank.oninput = function(){
    document.querySelector(".bank").textContent = bank.value
    gettime()
    gettoken()
};

card.oninput = function(){
    document.querySelector(".card").textContent = card.value
    gettime()
    gettoken()
};

function changebill(value){
    if(value ==1){
        document.querySelector(".bill-pre").classList.add("ht")
        document.querySelector(".bill-pre").classList.remove("nt")
        document.querySelector(".bill-pre").classList.remove("mtr")

    }else if(value ==2){
        document.querySelector(".bill-pre").classList.add("nt")
        document.querySelector(".bill-pre").classList.remove("ht")
        document.querySelector(".bill-pre").classList.remove("mtr")

    }else if(value ==3){
        document.querySelector(".bill-pre").classList.add("mtr")
        document.querySelector(".bill-pre").classList.remove("ht")
        document.querySelector(".bill-pre").classList.remove("nt")

    }
}


