import type { Client } from '../../api';
import type { CartItemEntity } from '../../api/rest/ShoppingCartRestAPI';
import { RemoteState } from './RemoteState';

type CartItemState = null | Omit<CartItemEntity, 'id'> | CartItemEntity;

class CartItemRemoteState extends RemoteState<Client, CartItemState> {
  readonly productId: number;

  constructor(client: Client, state: CartItemState, productId: number) {
    super(client, state);
    this.productId = productId;
  }

  override syncToRemote(lastState: CartItemState): Promise<unknown> | null {
    // sync: delete
    // 최종적으로 설정될 상태가 null(삭제됨)이라면, 삭제 쿼리를 보냅니다.
    if (lastState === null) {
      if (this.synchronizedState !== null && 'id' in this.synchronizedState) {
        return this.client
          .delete(this.client.path('/cart-items/:cartItemId', this.synchronizedState.id))
          .acceptOrThrow(204);
      }
      return null;
    }

    // sync: create
    // id가 존재하지 않는다면 생성하는 쿼리를 보냅니다.
    if (this.synchronizedState === null || !('id' in this.synchronizedState)) {
      return this.client.post('/cart-items', { productId: this.productId }).acceptOrThrow(201);
    }

    // sync: update
    // 삭제 혹은 생성이 아닐 경우 값을 업데이트하는 쿼리를 보냅니다.
    return this.client
      .patch(this.client.path('/cart-items/:cartItemId', this.synchronizedState.id), {
        quantity: lastState.quantity,
        checked: lastState.checked,
      })
      .acceptOrThrow(200);
  }
}

export default CartItemRemoteState;