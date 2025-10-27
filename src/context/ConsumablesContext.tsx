'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { Consumable, fetchConsumables } from '@/api/getConsumables';
import { usePathname } from 'next/navigation';

interface ConsumablesContextType {
  consumables: Consumable[];
  trackName: string;
  loading: boolean;
}

const ConsumablesContext = createContext<ConsumablesContextType>({
  consumables: [],
  trackName: 'Keitaro',
  loading: true,
});

export const ConsumablesProvider = ({ children }: { children: ReactNode }) => {
  const [consumables, setConsumables] = useState<Consumable[]>([]);
  const [trackName, setTrackName] = useState('Keitaro');
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const getLocaleFromPath = (pathname: string): [string, boolean] => {
    const pathSegments = pathname.split('/');
    const locale = pathSegments[1] || 'uk';
    const hasUkr = pathname.includes('ukr');
    return [locale, hasUkr];
  };

  const [locale, hasUkr] = getLocaleFromPath(pathname || '');

  useEffect(() => {
    async function loadConsumables() {
      try {
        const { consumables } = await fetchConsumables(locale, hasUkr);
        const consumablesWithIconUrl = consumables.map(item => ({
          ...item,
          iconUrl: item.icon
            ? `${process.env.NEXT_PUBLIC_ADMIN_HOST}${item.icon.url}`
            : null,
        }));

        setConsumables(consumablesWithIconUrl);

        const trackItem = consumables.find(item => item.key === 'track');
        if (trackItem?.Name) setTrackName(trackItem.Name);
      } catch (error) {
        console.error('Error loading consumables:', error);
      } finally {
        setLoading(false);
      }
    }

    loadConsumables();
  }, [locale, hasUkr]);

  return (
    <ConsumablesContext.Provider value={{ consumables, trackName, loading }}>
      {children}
    </ConsumablesContext.Provider>
  );
};

export const useConsumables = () => useContext(ConsumablesContext);
