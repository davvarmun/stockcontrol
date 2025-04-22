package com.davvarmun.stockcontrol.stockcontrol.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import com.davvarmun.stockcontrol.stockcontrol.product.dto.ProductDTO;
import com.davvarmun.stockcontrol.stockcontrol.exceptions.ResourceNotFoundException;


@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Integer id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product", "id", id));
    }

    public Product createProduct(ProductDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setQuantity(dto.getQuantity());
        product.setPrice(dto.getPrice());
        return productRepository.save(product);
    }

    public Product updateProduct(Integer id, ProductDTO dto) {
        Product existing = getProductById(id);
        existing.setName(dto.getName());
        existing.setQuantity(dto.getQuantity());
        existing.setPrice(dto.getPrice());
        return productRepository.save(existing);
    }

    public void deleteProduct(Integer id) {
        Product existing = getProductById(id);
        productRepository.delete(existing);
    }
}
