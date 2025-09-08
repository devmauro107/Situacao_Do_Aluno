const form = document.getElementById("formAluno");
const campoRec = document.getElementById("campoRecuperacao");
const imputRec = document.getElementById("rec");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let aulas = parseInt(document.getElementById("aulas").value);
    let faltas = parseInt(document.getElementById("faltas").value);
    let p1 = parseFloat(document.getElementById("nota1").value);
    let p2 = parseFloat(document.getElementById("nota2").value);

    let frequancia = 100 - (faltas / aulas) * 100;
    let media = (p1 + p2) / 2;
    let mediaFinal = media;
    let situacao = "";
    let texto = "";

    texto += `Números de aulas do semestre: ${aulas}\n`;
    texto += `Números de faltas do semestre: ${faltas}\n`;
    texto += `Percentual de presença do aluno(a): ${frequancia.toFixed(2)}%\n`;
    texto += `Primeira nota: ${p1}\n`;
    texto += `Segunda nota: ${p2}\n`;

if (frequancia < 75) {
    situacao = "Reprovado por falta";
} else if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    campoRec.style.display = "block";

if (imputRec.value) {
    let rec = parseFloat(imputRec.value);
    mediaFinal = (media + rec) / 2;
    texto += `Nota complementar (recuparação): ${rec}\n`;
    situacao = mediaFinal >= 5 ? "Aprovado por média" : "Reprovado por média";
} else {
    situacao = "Necessita de recuperação (sem nota complementar)";
}
} else {
    situacao = "Reprovado por média";
}

    texto += `Média final do aluno: ${mediaFinal.toFixed(2)}\n`;
    texto += `Situação final do aluno: ${situacao}\n`;
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = texto.replace(/\n/g, "<br>");
});
