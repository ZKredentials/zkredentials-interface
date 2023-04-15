import {
  NavigationActionableSection,
  NavigationContainer,
  NavigationLogo,
} from "./style";
import Wallet from "../Wallet";
import { useMetaMask } from "@/hooks/useMetamask";
import WorldID from "../WorldID";

const Navigation = () => {
  const {
    state: { wallet },
  } = useMetaMask();

  return (
    <NavigationContainer>
      <NavigationLogo>Zkredentials</NavigationLogo>

      <NavigationActionableSection>
        {wallet && <WorldID />}
        <Wallet />
      </NavigationActionableSection>
    </NavigationContainer>
  );
};

export default Navigation;
