import { useQuery } from '@tanstack/react-query';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { CartContext } from '../../contexts';
import { defaultTheme } from '../../styles/themes';
import { IconContainer } from '../IconContainer';
import { CartButton, HeaderContainer } from './styles';

export interface IpDataResponse {
  city: string;
  region_code: string;
  latitude: number;
  longitude: number;
}

const LS_LOCATION_KEY = '@coffee-delivery:user-location:1.0.0';

export const ipDataFetch = async () => {
  const lsLocation = localStorage.getItem(LS_LOCATION_KEY);

  if (lsLocation) {
    return JSON.parse(lsLocation) as IpDataResponse;
  } else {
    const apiData = await fetch(
      `https://api.ipdata.co?api-key=${
        import.meta.env.REACT_APP_IPDATA_KEY as string
      }&fields=city,region_code,latitude,longitude`,
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(LS_LOCATION_KEY, JSON.stringify(data));
        return data as IpDataResponse;
      });

    return apiData;
  }
};

export function Header() {
  const { cartState } = useContext(CartContext);
  const { isLoading, data } = useQuery<IpDataResponse>(['ipdata'], ipDataFetch);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img alt="" src={Logo} />
      </NavLink>
      <nav>
        {!isLoading && !!data && (
          <IconContainer
            bgColor={defaultTheme.colors.brandPurpleLight}
            iconColor={defaultTheme.colors.brandPurple}
            text={`${data.city}, ${data.region_code}`}
            textColor={defaultTheme.colors.brandPurpleDark}
          >
            <MapPin size={22} weight="fill" />
          </IconContainer>
        )}
        <CartButton to="/checkout">
          {cartState.totalItems > 0 && (
            <span>{cartState.totalItems < 100 ? cartState.totalItems : '+99'}</span>
          )}
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  );
}
