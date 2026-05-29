/* Global Imports */
import  { FC, useState } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Products.style.css';
import { productApi } from '@/core/services/product.crud';
import { ProductDTO } from '@/core/dto/product.dto';


interface ProductsProps {}

const useProductApi = () => {

   const [products, setProducts ] = useState<ProductDTO[]>([])

   const loadProducts = async () => {
      const data = await productApi.read()
      setProducts(data);
      console.log('UPDATE', data)
   }
   
   return {products, loadProducts}

}

const Products: FC<ProductsProps> = () => {

   Hooks.useDocumentTitle('Products View');

   const api = useProductApi()

   return (
   <div className="Products" data-testid="Products">
      <UI.Main>
         Products Content

         <UI.Button 
            action={api.loadProducts}
            level='primary'
            >
               Load
         </UI.Button>

         {
            api.products.map( p => <div key={p.id}>{p.title}</div>)
         }
         
      </UI.Main>
   </div>
   )
};

export default Products;
