public class Main {
    public static void main(String[] args) {
        Document doc1 = DocumentFactory.createDocument("word");
        doc1.open();

        Document doc2 = DocumentFactory.createDocument("pdf");
        doc2.open();

        Document doc3 = DocumentFactory.createDocument("excel");
        doc3.open();
    }
}
