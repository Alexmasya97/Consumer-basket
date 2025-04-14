export type Item = {
  id: string,
  img: string;
  title: string;
  rate: number;
  price: number;
  wireless: boolean;
  oldPrice?: number;
  quantity: number;
};

export type Items = Item[];
