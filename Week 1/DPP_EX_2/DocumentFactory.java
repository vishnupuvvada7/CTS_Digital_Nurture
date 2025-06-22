public class DocumentFactory {
    public static Document createDocument(String type) {
        switch (type.toLowerCase()) {
            case "word":
                return new wordDocument();
            case "pdf":
                return new pdfDocument();
            case "excel":
                return new excelDocument();
            default:
                throw new IllegalArgumentException("Unknown document type: " + type);
        }
    }
}
