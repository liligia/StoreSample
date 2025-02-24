
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { MdDeleteForever } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io"
import { removeProduct } from '../../redux/Cart/cart-slice';

interface CartProps {
    showCart: boolean;
    toggleCart: () => void
}
export const Cart: React.FC<CartProps> = ({showCart, toggleCart}) => {
    const {cart} = useSelector((rootReducer: RootReducer)=> rootReducer.cartReducer)
    const dispatch = useDispatch()
    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    }, 0)
    return (
        <S.Container showCart={showCart}>
             {showCart ? (<S.ButtonBack onClick= {toggleCart}><IoIosArrowBack /></S.ButtonBack>) : null}

            <S.Title>Carrinho</S.Title>

            <S.CartProductsList>
                { cart.map(product => (
                    <S.CartProductItem key={product.id}><strong>{product.title}</strong> ${product.price}
                
                <S.ButtonRemove onClick={() => dispatch(removeProduct(product))}><MdDeleteForever style={{fontSize: '20px'}}/></S.ButtonRemove>
                </S.CartProductItem>
                ))}
                
            </S.CartProductsList>

            <S.CartTotal>Total: ${total}</S.CartTotal>
        </S.Container>
    )
}