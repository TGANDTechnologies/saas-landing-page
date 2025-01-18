import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div>
      <div className="container">
        <div>
          <Image src={acmeLogo} alt="Acme logo"/>
          <Image src={quantumLogo} alt="Quantum logo"/>
          <Image src={echoLogo} alt="Echo logo"/>
          <Image src={celestialLogo} alt="Celestial logo"/>
          <Image src={pulseLogo} alt="Pulse logo"/>
          <Image src={apexLogo} alt="Apex logo"/>
        </div>
      </div>
    </div>
  )
}


