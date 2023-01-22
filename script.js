const checkNumber = document.querySelector("#btn")
const number = document.querySelector("#number")
const networkImg = document.getElementById("ourImage")

const identifier = {
  "MTN": [ "0803","0806","0703","0706","0810","0813","0814","0816","0903","0906","0916"],
  "GLO": ["0805", "0807", "0811", "0705", "0815", "0905"],
  "AIRTEL": ["0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901"],
  "9MOBILE": ["0809", "0817", "0818", "0908", "0909"]
};

function myFunction() {
  var x = document.getElementById("number").value;
  const networkValue = x.slice(0,4)

  for(let mobile in identifier){

    for(let number of identifier[mobile]){
      console.log(mobile) 
      if((networkValue === number || x.slice(0, 8).includes(number)) && mobile === "MTN"){
        networkImg.src = "pictures/mtn.jpg"
      }
      else if((networkValue === number || x.slice(0, 8).includes(number)) && mobile === "GLO"){
        networkImg.src="pictures/glo.jpg"
      }
      else if((networkValue === number || x.slice(0, 8).includes(number)) && mobile === "AIRTEL"){
        networkImg.src="pictures/airtel.jpg"
      }
      else if((networkValue === number || x.slice(0, 8).includes(number)) && mobile === "9MOBILE"){
        networkImg.src="pictures/9mobile.jpg"
      }
    }
  }
  
}
checkNumber.addEventListener('change',() =>{
  myFunction();
})
//   let phoneNo = number.value();

//   for (const network in identifier){
//     if (identifier[network].includes(phoneNo[0,4])){
//       if (network === MTN){
//         mtnImg.style.width = '200';
//         mtnImg.style.height ='100';
//         airtelImG.style.display = 'none';
//         nineMobileImg.style.display = 'none';
//         gloImg.style.display = 'none';
//       }
//       else if ( network === AIRTEL ) {
//          airtelImG.style.width  = '200';
//         airtelImG.style.height = '100';
//         mtnImg.style.display = 'none';
//         nineMobileImg.style.display = 'none';
//         gloImg.style.display = 'none';
//       }
//       else if (network === GLO ) {
//         gloImg.style.width = '200';
//         gloImg.style.height = '100';
//         airtelImG.style.display = 'none';
//         nineMobileImg.style.display = 'none';
//         mtnImg.style.display = 'none';
//       } else if ( network === "9MOBILE" ) {
//         nineMobileImg.style.width = '200';
//         nineMobileImg.style.height = '100';
//         airtelImG.style.display = 'none';
//         mtnImg.style.display = 'none';
//         gloImg.style.display = 'none';
//         return;
//       }
//     }
//   }
// })