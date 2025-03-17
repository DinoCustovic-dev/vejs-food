import { CartItemType } from '@/hooks/useCart';

const createOrderMessage = (
  items: CartItemType[],
  separator = '%0A',
): string => {
  let message = `Narudžba:${separator}`;

  items.forEach((item) => {
    message += `- ${item.name} x${item.quantity} (${(item.price * item.quantity).toFixed(2)} KM)${separator}`;
  });

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  message += `${separator}Ukupno: ${total.toFixed(2)} KM`;

  return encodeURIComponent(message);
};

export default createOrderMessage;
