document.querySelector(".sign-in-btn").addEventListener("click", () => {
    document.querySelector(".icloud-content").style.display = "none";
    document.querySelector(".login-content").style.display = "flex";  
});

document.querySelector(".send").addEventListener("click", () => {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let status = document.getElementById("error-message");

    if (!email || email.indexOf("@") === -1) {
        alert("Please enter a valid email.");
        return;
    } else if (!password || password.length < 8 || password.indexOf(" ") !== -1) {
        alert("Please enter a valid password.");
        return;
    }

    status.textContent = "login in...";
    status.style.color = "gray";
    setTimeout(() => {
        if (Math.random() < 0.5) {
            status.textContent = "帳號或密碼錯誤，請再試一次";
            status.style.color = "red";
        } else {
            status.textContent = "成功把帳號和密碼送到後端";
            status.style.color = "green";
        }
    }, 1500);
});

document.querySelector(".forgot-password").addEventListener("click", (e) => {
    let status = document.getElementById("error-message");
    e.preventDefault(); 
    status.style.color = "gray";
    status.textContent = "Redirecting to forgot.apple.com...";

    setTimeout(() => {
        alert("為了安全，我們已發送重設密碼連結至您的 Apple ID 信箱。");
        status.textContent = "請查看您的電子郵件以完成密碼重設。";
    }, 1500);
});

