import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        String csvFile = "caminho/do/arquivo.csv";
        String line = "";
        String csvDelimiter = ",";

        List<Objeto> objetos = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(csvFile))) {

            // lê a primeira linha do arquivo, que contém os nomes das colunas
            String[] colunas = br.readLine().split(csvDelimiter);

            // lê as linhas restantes do arquivo e cria objetos com os dados
            while ((line = br.readLine()) != null) {
                String[] dados = line.split(csvDelimiter);

                // cria um objeto com os dados da linha
                Objeto obj = new Objeto();
                obj.setAtributo1(dados[0]);
                obj.setAtributo2(dados[1]);
                obj.setAtributo3(dados[2]);

                objetos.add(obj);
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        // faz algo com os objetos preenchidos
        for (Objeto obj : objetos) {
            System.out.println(obj);
        }
    }
}

class Objeto {
    private String atributo1;
    private String atributo2;
    private String atributo3;

    // construtores, getters e setters aqui

    @Override
    public String toString() {
        return "Objeto{" +
                "atributo1='" + atributo1 + '\'' +
                ", atributo2='" + atributo2 + '\'' +
                ", atributo3='" + atributo3 + '\'' +
                '}';
    }
}
