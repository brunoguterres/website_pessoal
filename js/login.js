document.addEventListener("DOMContentLoaded", function() {
    // Verificar se o usuário é administrador (simulação)
    function isAdmin(username) {
        return username === "admin";
    }

    // Event listener para o botão "Entrar"
    document.getElementById("loginButton").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Simulação de login bem-sucedido para o usuário administrador
        if (isAdmin(username) && password === "admin") {
            // Mostrar o botão "Área de Administração"
            document.getElementById("adminButton").style.display = "inline-block";
        }
    });
});
