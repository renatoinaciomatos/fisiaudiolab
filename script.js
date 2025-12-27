document.addEventListener('DOMContentLoaded', () => {
    // Feedback simples ao clicar no botão de download
    const downloadBtn = document.querySelector('.download-btn');

    downloadBtn.addEventListener('click', () => {
        console.log("Download solicitado.");
        // O atributo 'download' no HTML já cuida do início do download
    });
});
