
import java.util.*;



public class ProductMain {
    
public static void main(String[] args) {

        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Apparel"),
            new Product(3, "Bat", "Sports")
        };

        Product res1 = linearSearch(products, "Shirt");
        if (res1 != null) {
            System.out.println("Found " + res1.productName+ " using Linear Search");
        } else {
            System.out.println("Not found");
        }

        Product res2 = binarySearch(products, "Bat");
        if (res2 != null) {
            System.out.println("Found " + res2.productName+ " using Binary Search");
        } else {
            System.out.println("Not found");
        }

    }

    public static Product linearSearch(Product[] products, String targetName) {
    for (Product product : products) {
        if (product.productName.equalsIgnoreCase(targetName)) {
            return product;
        }
    }
    return null;
}
    public static Product binarySearch(Product[] products, String targetName) {
    
    Arrays.sort(products, Comparator.comparing(p ->p.productName.toLowerCase()));
    int low = 0, high = products.length - 1;


    while (low <= high) {
        int mid = (low + high) / 2;
        int cmp = products[mid].productName.compareToIgnoreCase(targetName);

        if (cmp == 0) return products[mid];
        else if (cmp < 0) low = mid + 1;
        else high = mid - 1;
    }
    return null;
    }    
}
