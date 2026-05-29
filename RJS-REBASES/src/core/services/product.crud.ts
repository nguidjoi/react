import { ProductDTO } from "../dto/product.dto";
import { ENDPOINTS } from "../types/crud-service.type";
import { CrudAbstract } from "./crud.abstract";


class ProductCrud extends CrudAbstract<ProductDTO>{

    API:ENDPOINTS = '/api/products'

}

export const productApi = new ProductCrud()


