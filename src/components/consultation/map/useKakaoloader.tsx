import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    //@ts-ignore
    appkey: process.env.NEXT_PUBLIC_KAKAO_KEY,
    libraries: ['clusterer', 'drawing', 'services'],
  });
}
