// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไรurl = "https://dog.ceo/api/breeds/image/random";
  url = "https://dog.ceo/api/breeds/image/random";
  getAPI(url,success,error)
    function success(img){
      console.log(img)
      setTimeout(()=>{
        document.getElementById("dogImg").src = img.message;
      },10000)
    
  }
  function error(error){
    console.log(error)
  } 
}


// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

  const rainbow = document.getElementById("rainbow")

  setTimeout(() => {
    var check = getResult();
  if (check.status == 'success') {
      rainbow.innerHTML = check.text;
      rainbow.classList.add('has-text-primary');
  }else{
    rainbow.innerHTML = "STATE-1";
    rainbow.classList.add('has-text-danger');
    
  }
    // STATE 1 color = 'has-text-primary'
  setTimeout(() => {
     var check1 = getResult();
  if (check1.status == 'success') {
      rainbow.innerHTML = check1.text;
      rainbow.classList.add('has-text-success');
  }else{
    rainbow.innerHTML = "STATE-2";
    rainbow.classList.add('has-text-danger');
    
  }
        
        // STATE 2 color = 'has-text-success'
        setTimeout(() => {
      var check2 = getResult();
  if (check2.status == 'success') {
      rainbow.innerHTML = check1.text;
      rainbow.classList.add('has-text-success');
  }else{
    rainbow.innerHTML = "STATE-3";
    rainbow.classList.add('has-text-danger');
    
  }
            // STATE 3 color = 'has-text-success'
        }, 2000)

      }, 2000)

  }, 2000)
}

function getResult(){
  const num = Math.floor(Math.random() * 10)
  console.log(num)
  if(num > 5) {
    return {
      'status': 'success',
      'text': num
    }
  }else{
    return {
      'status': 'error',
      'text': num
    }
  }
  
}

const even = async() => {
  if (num % 2 === 0) {
    //
  }
  else {
    //
  }
}

// ข้อ 3.3
async function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้
   // The producing code (this may take some time)
  // let result = new Promise(function(myResolve, myReject) {
  //   if (num % 2 == 0) {
  //     myResolve ("success : "+ num +" is an even number");
  //   } else {
  //     myReject ( "Error : "+ num +" is not an even number");
  //   }
  // });
  // result.then((value) => {
  //   document.getElementById("result").innerHTML = value; // Success!
  // }).catch((error) => {
  //   document.getElementById("result").innerHTML = error; // Error!
  // })

 }
 
// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000)
  // return promise
  return new Promise(function(myResolve, myReject) {
    setTimeout(() => {
      if (delay < 500) {
        myResolve("task : "+ id + delay +"ms ... PASS!");
      } else {
        myReject("task : "+ id + delay +"ms ... NOTPASS!");
      }
    }, delay)
    });
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ
  task(1).then((res) =>{
    console.log(res)
  }).catch((err) =>{
    console.log(err)
  })
  task(2).then((res) =>{
    console.log(res)
  }).catch((err) =>{
    console.log(err)
  })
  task(3).then((res) =>{
    console.log(res)
  }).catch((err) =>{
    console.log(err)
  })
  task(4).then((res) =>{
    console.log(res)
  }).catch((err) =>{
    console.log(err)
  })
}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search 
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  return new Promise((resolve, reject) => {
    if(password == "Cisco"){
      resolve("รหัสผ่านถูกต้อง")
     }
    else{
      reject("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง")
     }
 })
  }

function fetchData(password) {
  checkAuth(password).then((res) => {
    alert(res)
    getAPI("https://api.thecatapi.com/v1/images/search", (res) =>
     document.getElementById("cat").src = res[0].url)
  }).catch((err)=>
     alert(err)
  )
}

// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
