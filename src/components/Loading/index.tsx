import { LoadingImgWrapper, WrapperLoading } from "./Loading.styled";
import load from '../../assets/svgs/Loading/sun.svg'
import energy from '../../assets/svgs/Loading/energy.svg'
import { useEffect } from "react";

interface LoadingType {
  show: boolean
  variant?: '01' | '02'
}

export function Loading({show, variant='01'}:LoadingType) {

  useEffect(() => {
    if(show) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 20)
      document.body.style.overflowY = 'hidden'
    }else {
      document.body.style.overflowY = ''
    }
  }, [show])

  return (
    <WrapperLoading show={show} variant={variant}>
      <LoadingImgWrapper variant={variant}>
        <img className="sun" src={load} />
        <img className="energy" src={energy} />
      </LoadingImgWrapper>
    </WrapperLoading>
  )
}