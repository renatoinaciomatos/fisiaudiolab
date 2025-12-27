document.addEventListener('DOMContentLoaded', () => {
    console.log("Página Fisiaudiolab carregada com sucesso.");

    const downloadBtn = document.querySelector('.download-btn');

    downloadBtn.addEventListener('click', () => {
        // Log para controle simples ou analytics futuro
        console.log("Iniciando download do APK...");
    });
});
