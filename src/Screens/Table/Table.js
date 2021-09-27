import React, { useState, useEffect } from 'react'
import Axios from 'axios'

/**Components */
import Pagination from '../../components/Pagination/Pagination'

/**Styles */
import './Style.css'

const Table = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState("ASC");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await Axios.get('https://fakestoreapi.com/products');
            setLoading(false);
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }

    const sorting = (col) => {
        if(order === "ASC"){
            const sorted = [...products].sort((a,b) => 
                a[col] > b[col] ? 1 : -1
            );
            setProducts(sorted);
            setOrder("DSC");
        }
        if(order === "DSC"){
            const sorted = [...products].sort((a,b) => 
                a[col] < b[col] ? 1 : -1
            );
            setProducts(sorted);
            setOrder("ASC");
        }
    }


    useEffect(() => {
        fetchData();
    }, [])


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="body">
            {loading ? <div>Loading</div> : error ? <div>Error</div> :

                <table className="table table-dark">
                    <th onClick={() => sorting("title")}>Título</th>
                    <th onClick={() => sorting("category")}>Categoría</th>
                    <th onClick={() => sorting("price")}>Precio</th>

                    <tbody>
                        {currentProducts.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            }
            <Pagination  productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
        </div>
    )
}

export default Table
