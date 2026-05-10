// 1. رسالة ترحيبية باسم الزائر
window.onload = function() {
    let userName = prompt("مرحباً بك، الرجاء إدخال اسمك:");
    if (userName) {
        alert("أهلاً بك يا " + userName + " في موقعنا التعليمي!");
    }
};

// 2. حساب حجم الأسطوانة
function calculateCylinder() {
    let r = document.getElementById('radius').value;
    let h = document.getElementById('height').value;
    if (r && h) {
        let volume = Math.PI * Math.pow(r, 2) * h;
        document.getElementById('res-cylinder').innerText = "حجم الأسطوانة = " + volume.toFixed(2);
    } else {
        alert("الرجاء إدخال نصف القطر والارتفاع");
    }
}

// 3. حل معادلة الدرجة الثانية
function solveQuadratic() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    
    if (a == 0) {
        document.getElementById('res-quadratic').innerText = "قيمة a لا يمكن أن تكون صفراً";
        return;
    }

    let d = (b * b) - (4 * a * c);
    let result = "";

    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        result = "الجذور: " + x1.toFixed(2) + " و " + x2.toFixed(2);
    } else if (d == 0) {
        let x = -b / (2 * a);
        result = "جذر مكرر: " + x.toFixed(2);
    } else {
        result = "لا توجد جذور حقيقية";
    }
    document.getElementById('res-quadratic').innerText = result;
}
