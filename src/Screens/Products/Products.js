import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**STYLES */
import './Style.css'

/**COMPONENTS */
import Product from '../../components/Product/Product'
import { listProducts } from '../../redux/actions/productActions'

const Products = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    const filteredProducts = products && products.filter(product => {
        return product.category.includes(search.toLocaleLowerCase())
    })

    return (
        <div className="home">
            <div className="row__products">
                {loading ? <div>Loading...</div>
                    : error ? <div>{error}</div>
                        :
                        <div>
                            <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <div className="grid-container">
                                {filteredProducts.map(item => {
                                    return (
                                        <Product
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            img={item.image}
                                            category={item.category}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}

export default Products