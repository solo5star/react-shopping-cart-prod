import { styled } from 'styled-components';
import CartEmptyPlaceholder from '../components/CartEmptyPlaceholder';
import CartItemListItem from '../components/CartItemListItem';
import CartOrder from '../components/CartOrder';
import Checkbox from '../components/common/Checkbox';
import AwaitRecoilState from '../components/utils/AwaitRecoilState';
import useCartActions from '../hooks/useCartActions';
import useCartOrder from '../hooks/useCartOrder';
import cartItemsState from '../recoil/atoms/cartItemsState';
import type { CartItem } from '../type';

const Header = styled.header`
  padding-bottom: 32px;

  border-bottom: 4px solid #333333;

  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

const CartLayout = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 48px;
  column-gap: 24px;

  margin-top: 32px;

  @media screen and (min-width: 992px) {
    grid-template-columns: minmax(auto, 720px) minmax(auto, 440px);
  }
`;

const CartItemListSection = styled.section``;

const CartItemListCaption = styled.h2`
  margin-bottom: 16px;

  font-size: 20px;
`;

const CartItemList = styled.ul`
  border-top: 4px solid #aaaaaa;

  & > * + * {
    border-top: 1.5px solid #cccccc;
  }
`;

const CartItemListItemContainer = styled.li`
  display: flex;
  gap: 16px;

  padding: 32px 0;
`;

const CartItemListController = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CartItemSelected = styled.p`
  font-size: 16px;
`;

const DeleteSelectedButton = styled.button`
  padding: 6px;

  border: 1px solid #bbbbbb;
  font-size: 16px;
`;

type CartPageContentProps = {
  cartItems: CartItem[];
};

const CartPageContent = (props: CartPageContentProps) => {
  const { cartItems } = props;
  const selectedCount = cartItems.filter((cartItem) => !cartItem.unselectedForOrder).length;
  const allSelected = selectedCount === cartItems.length;

  const { deleteCartItems } = useCartActions();
  const { selectForOrder, toggleForOrder, unselectAllForOrder } = useCartOrder();

  const handleEnableAll = (cartItems: CartItem[]) => () => {
    if (allSelected) {
      unselectAllForOrder();
      return;
    }
    cartItems.forEach((cartItem) => selectForOrder(cartItem.product.id));
  };

  const handleDeleteSelected = (cartItems: CartItem[]) => () => {
    unselectAllForOrder();
    deleteCartItems(cartItems.map((cartItem) => cartItem.product.id));
  };

  return (
    <CartLayout>
      <CartItemListSection>
        <CartItemListCaption>배송 상품 ({cartItems.length}개)</CartItemListCaption>
        <CartItemList>
          {cartItems.map((cartItem) => (
            <CartItemListItemContainer>
              <Checkbox
                value={!cartItem.unselectedForOrder}
                onChange={() => toggleForOrder(cartItem.product.id)}
              />
              <CartItemListItem
                key={cartItem.product.id}
                product={cartItem.product}
                quantity={cartItem.quantity}
              />
            </CartItemListItemContainer>
          ))}
        </CartItemList>

        <CartItemListController>
          <Checkbox value={allSelected} onChange={handleEnableAll(cartItems)} />
          <CartItemSelected>
            전체선택 ({selectedCount}/{cartItems.length}개)
          </CartItemSelected>
          <DeleteSelectedButton onClick={handleDeleteSelected(cartItems)}>
            선택삭제
          </DeleteSelectedButton>
        </CartItemListController>
      </CartItemListSection>

      <CartOrder isCartEmpty={selectedCount === 0} />
    </CartLayout>
  );
};

const CartPage = () => {
  return (
    <>
      <Header>장바구니</Header>

      <AwaitRecoilState state={cartItemsState}>
        {(cartItems) =>
          cartItems.length === 0 ? (
            <CartEmptyPlaceholder />
          ) : (
            <CartPageContent cartItems={cartItems} />
          )
        }
      </AwaitRecoilState>
    </>
  );
};

export default CartPage;
