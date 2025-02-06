interface FormData {
  message: string;
  name?: string;
  username?: string;
  phone?: string;
  bot?: boolean;
}

interface QueryParams {
  [key: string]: string | null | undefined;
  refId?: string | null | undefined;
  sub1?: string | null | undefined;
  sub2?: string | null | undefined;
  sub3?: string | null | undefined;
  sub4?: string | null | undefined;
  sub5?: string | null | undefined;
  sub6?: string | null | undefined;
  sub7?: string | null | undefined;
  sub8?: string | null | undefined;
  fbp?: string | null | undefined;
}

const getDefaultUrl = (): string =>
  typeof window !== 'undefined'
    ? document.referrer || 'Не вказано'
    : 'Не вказано';
const url = getDefaultUrl();

const getQueryParams = (): QueryParams => {
  const searchParams = new URLSearchParams(window.location.search);
  return {
    refId: searchParams.get('ref_id'),
    sub1: searchParams.get('sub1'),
    sub2: searchParams.get('sub2'),
    sub3: searchParams.get('sub3'),
    sub4: searchParams.get('sub4'),
    sub5: searchParams.get('sub5'),
    sub6: searchParams.get('sub6'),
    sub7: searchParams.get('sub7'),
    sub8: searchParams.get('sub8'),
    fbp: searchParams.get('fbp'),
  };
};

function getParamString(queryParams: QueryParams): string {
  let message = '';

  for (const key in queryParams) {
    if (queryParams[key]) {
      message += `${key} <b>${queryParams[key]}</b>\n`;
    }
  }

  return message;
}

export const sendToGoogleScript = async (data: FormData) => {
  const requestData = {
    ...data,
    url,
    ...getQueryParams(),
  };

  try {
    const response = await fetch('/api/sendToGoogle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send data to API: ${errorText}`);
    }
  } catch (error) {
    console.error('Error sending data to API: ', error);
    throw new Error('Error sending data to API: ' + error);
  }
};

export const sendMessage = async (sendData: FormData): Promise<void> => {
  const baseMessage = sendData.bot
    ? '<b>Користувач перейшов в бот:</b>'
    : `<b>Користувач відправив форму:</b>\nФІО: <b>${
        sendData.name || ''
      }</b>\nТелефон: <b>${sendData.phone || ''}</b>\nTg username: <b>${
        sendData.username || ''
      }</b>`;

  const message = `${baseMessage}\nUrl: <b>${url}</b>\n${getParamString(
    getQueryParams()
  )}`;

  try {
    const response = await fetch('/api/sendToTg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to send data to API: ${errorText}`);
    }
  } catch (error) {
    console.error('Error sending data to API: ', error);
    throw new Error('Error sending data to API: ' + error);
  }
};
