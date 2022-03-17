import React from 'react';
import './style.css';
import Product from '../Product';

const Accessories = ({title}) => {
    return (
        <section className="accessories">
            <h2>{title}</h2>
            <div className="products">
			    <Product image="blue-handbag.jpg" name="Modrá kabelka" description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostru pro váš mobil, peněženku a další nezbytnosti." price="3590 Kč"/>
			    <Product image="grey-scarf.jpg" name="Šedá vlněná šála" description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné." price="970 Kč"/>
			    <Product image="glasses.jpg" name="Brýle" description="Elegantní brýle nejen pro odvážné učitelky, ale také pro všechny dámy následující módní trendy." price="1620 Kč"/>
			</div>
        </section>
    )
};

export default Accessories;