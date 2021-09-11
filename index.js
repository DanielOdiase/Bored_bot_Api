let BtnEl= document.getElementById("bored-btn")
let QuoteEl =document.getElementById("quotes-el")
BtnEl.addEventListener('click',function(){
fetch("https://apis.scrimba.com/bored/api/activity")
.then(response=>response.json())
.then(data=> {
        QuoteEl.textContent=data.activity
        document.body.classList.add("fun")
});
})
