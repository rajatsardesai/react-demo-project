import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../actions/productActions';
import { useEffect } from 'react';

const ProductListing = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log('err', err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="ui grid container" style={{"marginTop":"20px"}} >
                <ProductComponent />
            </div>
        </>
    )
}

export default ProductListing
