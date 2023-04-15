import {
  NavigationActionableSection,
  NavigationContainer,
  NavigationLogo,
  NavigationLogoContainer,
  NavigationLogoImage,
} from "./style";
import Wallet from "../Wallet";
import { useMetaMask } from "@/hooks/useMetamask";
import WorldID from "../WorldID";
import ZKredentialsLogo from "@/assets/images/ZKredentials.svg";
import Image from "next/image";

const Navigation = () => {
  const {
    state: { wallet },
  } = useMetaMask();

  return (
    <NavigationContainer>
      <NavigationLogoContainer>
        <NavigationLogoImage>
          <Image src={ZKredentialsLogo} alt="ZKredentials Icon" fill />
        </NavigationLogoImage>
        <NavigationLogo>ZKredentials</NavigationLogo>
      </NavigationLogoContainer>

      <NavigationActionableSection>
        {wallet && <WorldID />}
        <Wallet />
      </NavigationActionableSection>
    </NavigationContainer>
  );
};

export default Navigation;
