import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

export type ProductTableProps ={
    products: {
        category: string;
        price: string;
        stocked: boolean;
        name: string;
    }[]
}

export default function ProductTable({ products } : ProductTableProps){
    const rows: React.ReactElement[] = [];
    let lastCategory: string | null = null;

    products.forEach((product) => {
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} 
                />
            )
        }
        rows.push(
            <ProductRow 
                product={product} 
                key={product.name}
            />
        )
        lastCategory = product.category;
    })
    return(
        <table className="ProductTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}