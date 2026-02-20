async function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorE1 = document.getElementById("error");

    if (!username || !password){
        errorE1.textContent= "Isi semua field!";
        return;
    }

    try {
        const res = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
        const data = await res.json();

        if (data.length > 0) {
            //login berhasil
            const user = data[0];
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.href = "dashboard.html";
        } else {
            errorE1.textContent ="Username atau Password salah!";
        }
    } catch (err) {
        errorE1.textContent = "Gagal terhubung ke server!";
    }
}