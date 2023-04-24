import { ShareNetwork } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import { colors } from '../../styles/variables';
import { ButtonShareStyled } from './share.styled';

export function ShareButton() {
  const location = useLocation()

  function share() {
    if (navigator.share !== undefined) {
      navigator.share({
        title: 'SolarCalc',
        text: 'Veja o relatório de geração de energia solar!',
        url: location.search,
      })
        .then(() => console.log('Successful share: ' + location.search))
        .catch((error) => console.log('Error sharing', error));
    }
  }
  

  return (
    <ButtonShareStyled onClick={share}>
      <ShareNetwork
       size={28}          
       color={colors.yellow}       
       weight="regular"
      />
    </ButtonShareStyled>
  )
}