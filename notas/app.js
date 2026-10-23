let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

alert("Media: " + media);

if (media >= 6) {
    alert("Aprovado");
} else {
    alert("Reprovado");
}