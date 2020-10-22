import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button.jsx'


function SandwichBlock({ id, name, imageUrl, price, types, sizes, description, onClickAddProducts }) {

    const sizesNames = [15, 30]
    const [activeSize, setActiveSize] = React.useState(0);
    const onSelectSize = (index) => {
        setActiveSize(index);
    };

    const typesNames = ['белый хлеб', 'серый хлеб', 'ржаной хлеб']
    const [activeType, setActiveType] = React.useState(types[0]);
    const onSelectType = (index) => {
        setActiveType(index);
    };

    const onAddProducts = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: sizesNames[activeSize],
            type: typesNames[activeType]
        };
        onClickAddProducts(obj)
    };

    return (
        <div className="sandwich">
            <img src={imageUrl} alt="" className="sandwich__pic" />
            <h4 className="sandwich__title">{name}</h4>
            <div className="sandwich__selector">

                {types.length > 0 &&
                    <>
                        <ul className="sandwich__size">
                            {sizesNames.map((size, index) =>
                                <li key={size}
                                    onClick={() => onSelectSize(index)}
                                    className={
                                        `sandwich__size-item
                                ${activeSize === index ? 'active' : ''} 
                                ${!sizes.includes(size) ? 'disabled' : ''}
                                `
                                    }
                                >
                                    {size} см.
                                </li>)}
                        </ul>
                        <ul className="sandwich__bread">
                            {typesNames.map((type, index) =>
                                <li key={type}
                                    onClick={() => onSelectType(index)}
                                    className={
                                        `sandwich__bread-item
                                ${activeType === index ? 'active' : ''} 
                                ${!types.includes(index) ? 'disabled' : ''}
                                `
                                    }
                                >
                                    {type}
                                </li>)}
                        </ul>
                    </>
                }

                {!types.length &&

                    <p className="sandwich__description">{description}</p>

                }



            </div>
            <div className="sandwich__add">
                <p className="sandwich__price">{price} ₽</p>
                <Button 
                    onClick={onAddProducts} 
                    className="button--outline"
                >
                    <svg className="button-plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="button-plus-svg" d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"></path>
                    </svg>
                    <span>Добавить</span>
                    <i className="button--info">2</i>
                </Button>
            </div>
        </div>
    )
}

SandwichBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onAddProducts: PropTypes.func,
};
SandwichBlock.defaultProps = {
    name: '-----',
    price: 0,
    types: [],
    sizes: [],
};
export default SandwichBlock
