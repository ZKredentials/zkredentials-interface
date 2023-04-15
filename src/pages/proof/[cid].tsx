import ProofView from "@/views/ProofView";
import { useRouter } from "next/router";

const ProofPage = () => {
  const router = useRouter();
  const { cid } = router.query;

  return <ProofView cid={cid as string} />;
};

export default ProofPage;
