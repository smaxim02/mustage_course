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

export async function fetchData(locale: string): Promise<ApiResponse> {
  let lang = locale;
  if (locale === 'uk') {
    lang = 'uk-UA';
  }
  const url = `${host}/api/tariffs?locale=${lang}&populate=*`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch vacancy: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data;
}
