import React from 'react';
import './style.css';
import Product from '../Product';


const Shoes = ({title}) => {
  return (
		<section className="shoes">
            <h2>Boty</h2>
            <div class="products">
                <h2 className='shoes h2'>{title}</h2>
                <div className="products">
                    <Product image="running-shoes.jpg"name="Běhací tenisky" description="Růžová s kontrastními šedými a bílými detaily? Velká paráda! Tyhle tenisky jsou další srdcová záležitost." price="1790 Kč"/>	
                    <Product image="shiny-shoes.jpg"name="Třpytivé lodičky" description="Elegantní třpytivé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět." price="2950 Kč"/>
                    <Product image="red-shoes.jpg"name="Červené botičky" description="Extravagantní červené boty s vysokým šněrováním. V těchto botách se za vámi budou všichni otáčet." price="6200 Kč"/>
                </div>
            </div>
        </section>
  )
};

export default Shoes;