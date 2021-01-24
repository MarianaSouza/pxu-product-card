import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './productList.scss';


function ProductList(){
	return(
		<Container className="list-wrapper">
			<Row>
               <h1>Here my product will be rendered</h1>
			</Row>
		</Container>
	)

}

export default ProductList;