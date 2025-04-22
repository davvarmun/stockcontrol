package com.davvarmun.stockcontrol.stockcontrol.product.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {

    @NotBlank
    @Size(min = 2, max = 100)
    private String name;

    @NotNull
    private Integer quantity;

    @NotNull
    private Double price;
}
