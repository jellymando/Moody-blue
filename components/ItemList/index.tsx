import React from 'react';
import { List, Item, ItemImage } from './styled';

interface ItemType {
    ProductCode: {
        _text: string;
    };
    ProductImage300: {
        _cdata: string;
    };
    ProductName: {
        _cdata: string;
    };
}

const ItemList = ({ items }: { items: ItemType[] }) => {
    return (
        <List>
            {items.map((item) => {
                return (
                    <Item key={item.ProductCode._text}>
                        <ItemImage src={item.ProductImage300._cdata} alt={item.ProductName._cdata} />
                    </Item>
                );
            })}
        </List>
    );
};

export default ItemList;
