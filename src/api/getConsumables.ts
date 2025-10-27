export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
}

export interface ImageData {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ConsumableLocalization {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  key: string;
  Name: string;
  Price: string;
  Price_USD: string;
}

export interface Consumable {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  key: string;
  Name: string;
  Price: string;
  Price_USD: string;
  icon: ImageData | null;
  localizations: ConsumableLocalization[];
}

export interface ConsumablesResponse {
  data: Consumable[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const host = process.env.NEXT_PUBLIC_ADMIN_HOST;

export async function fetchConsumables(
  locale: string,
  hasUkr: boolean
): Promise<{
  consumables: Consumable[];
  currencySymbol: string;
  currencyKey: string;
}> {
  const lang = locale === 'uk' ? 'uk-UA' : locale;

  const currencySymbol = hasUkr ? 'грн' : '$';
  const currencyKey = hasUkr ? 'Price' : 'Price_USD';

  const url = `${host}/api/consumables?locale=${lang}&populate=*`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch consumables: ${response.statusText}`);
  }

  const data: ConsumablesResponse = await response.json();

  return { consumables: data.data, currencySymbol, currencyKey };
}
