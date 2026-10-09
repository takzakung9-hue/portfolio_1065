// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;

function setupFunction() {
    // ให้นักศึกษากำหนดชื่อหัวข้อของหน้าเว็บที่ id="top"

     document.getElementById("top").textContent = "Welcome to the Forum";
     
    let post = document.getElementById("post");
    post.onclick =  postFunction;

      let clear = document.getElementById("clear");
    clear.onclick = clearFunction;

}

// สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0
let postCount = 0;

function postFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ:
    //    - ครั้งที่ 1 ใส่ใน id="topic"
    //    - ครั้งที่ 2 ใส่ใน id="reply1"
    //    - ครั้งที่ 3 ใส่ใน id="reply2"
    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    // 4. เพิ่มค่า postCount



     let message = document.getElementById("message").value;

    
    if (postCount === 0) {
        document.getElementById("topic").textContent = message;
    } else if (postCount === 1) {
        document.getElementById("reply1").textContent = message;
    } else if (postCount === 2) {
        document.getElementById("reply2").textContent = message;
    }

    document.getElementById("message").value = "";

    postCount++;
   
}

function clearFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
    // 2. ล้างข้อความใน textarea (id="message")
    // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น
 
    
    document.getElementById("topic").textContent = "";
    document.getElementById("reply1").textContent = "";
    document.getElementById("reply2").textContent = "";

    document.getElementById("message").value = "";

    postCount = 0;

  
}
