import type { Client } from '../../api';
import type { CartItemEntity } from '../../api/rest/ShoppingCartRestAPI';
import { RemoteState } from './RemoteState';

type CartItemState =
  | null
  | Pick<CartItemEntity, 'quantity' | 'checked'>
  | Pick<CartItemEntity, 'id' | 'quantity' | 'checked'>;

class CartItemRemoteState extends RemoteState<Client, CartItemState> {
  readonly productId: number;

  constructor(client: Client, state: CartItemState, productId: number) {
    super(client, state);
    this.productId = productId;
  }

  override syncToRemote(lastState: CartItemState): Promise<CartItemState> | null {
    // sync: delete
    // 최종적으로 설정될 상태가 null(삭제됨)이라면, 삭제 쿼리를 보냅니다.
    if (lastState === null) {
      if (this.synchronizedState !== null && 'id' in this.synchronizedState) {
        return this.client
          .delete(this.client.path('/cart-items/:cartItemId', this.synchronizedState.id))
          .acceptOrThrow(204)
          .then(() => null);
      }
      return null;
    }

    // sync: create
    // id가 존재하지 않는다면 생성하는 쿼리를 보냅니다.
    if (this.synchronizedState === null || !('id' in this.synchronizedState)) {
      this.set(lastState); // id가 없어 lastState를 업데이트할 수 없기 때문에, 우선은 다음 업데이트로 미뤄둡니다
      return this.client
        .post('/cart-items', { productId: this.productId })
        .acceptOrThrow(201)
        .then((response) => ({
          id: Number(response.headers.location.split('/').pop()),
          ...response.data,
        }));
    }

    // sync: update
    // 삭제 혹은 생성이 아닐 경우 값을 업데이트하는 쿼리를 보냅니다.
    const { id } = this.synchronizedState;
    return this.client
      .patch(this.client.path('/cart-items/:cartItemId', id), {
        quantity: lastState.quantity,
        checked: lastState.checked,
      })
      .acceptOrThrow(200)
      .then((response) => ({ id, ...response.data }));
  }
}

export default CartItemRemoteState;
