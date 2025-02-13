export interface TariffItem {
  id: number;
  TariffsItem: string;
}

// Основний інтерфейс тарифу
export interface Tariff {
  id: number;
  documentId: string;
  key: string;
  Name: string;
  Price: string;
  Price_USD: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  TariffsItems: TariffItem[];
}

// Інтерфейс відповіді від сервера
export interface ApiResponse {
  data: Tariff[];
}

const host = process.env.NEXT_PUBLIC_ADMIN_HOST;

export async function fetchData(
  locale: string
): Promise<{ tariffs: Tariff[]; currencySymbol: string; currencyKey: string }> {
  const lang = locale === 'uk' ? 'uk-UA' : locale;

  // const currencySymbol = locale === 'uk' ? 'грн' : '$';
  // const currencyKey = locale === 'uk' ? 'Price' : 'Price_USD';
  const currencySymbol = 'грн';
  const currencyKey = 'Price';

  const url = `${host}/api/tariffs?locale=${lang}&populate=*`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch tariffs: ${response.statusText}`);
  }

  const data: ApiResponse = await response.json();
  return { tariffs: data.data, currencySymbol, currencyKey };
}
