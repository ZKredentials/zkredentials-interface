import Image from "next/image";
import {
  ProofCardCTASection,
  ProofCardContainer,
  ProofCardIcon,
  ProofCardTypeIcon,
  ProofCardTypeIconContainer,
} from "./style";
import GithubIcon from "@/assets/images/Github.svg";
import ViewIcon from "@/assets/images/View.svg";
import ShareIcon from "@/assets/images/Share.svg";
import { FC } from "react";
import { getIpfsUrl } from "@/utils/helper";

interface IProps {
  cid: string;
}

const ProofCard: FC<IProps> = ({ cid }) => {
  const url = `https://zkredentials-interface.vercel.app/proof/${cid}`;

  const copyToClipboard = () => {
    if (window) {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <ProofCardContainer>
      <ProofCardTypeIconContainer>
        <ProofCardTypeIcon>
          <Image src={GithubIcon} alt="Github" fill />
        </ProofCardTypeIcon>
      </ProofCardTypeIconContainer>
      <ProofCardTypeIconContainer>
        <ProofCardCTASection>
          <a href={url} target="_blank">
            <ProofCardIcon>
              <Image src={ViewIcon} alt="View" fill />
            </ProofCardIcon>
          </a>
        </ProofCardCTASection>
        <ProofCardCTASection>
          <ProofCardIcon onClick={copyToClipboard}>
            <Image src={ShareIcon} alt="View" fill />
          </ProofCardIcon>
        </ProofCardCTASection>
      </ProofCardTypeIconContainer>
    </ProofCardContainer>
  );
};

export default ProofCard;
