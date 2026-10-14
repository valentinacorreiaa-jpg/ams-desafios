import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        double nota1, nota2, media;

        System.out.print("Digite a primeira nota: ");
        nota1 = entrada.nextDouble();

        System.out.print("Digite a segunda nota: ");
        nota2 = entrada.nextDouble();

        media = (nota1 + nota2) / 2;

        System.out.println("Media: " + media);

        if (media >= 6) {
            System.out.println("Aprovado");
        } else {
            System.out.println("Reprovado");
        }

        entrada.close();
    }
}