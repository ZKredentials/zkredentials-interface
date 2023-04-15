import useGithubGenerate from "@/hooks/useGithubGenerate";

const GithubStatistics = () => {
  const { data, loading, error, generate } = useGithubGenerate();

  const handleGenerate = async () => {
    const cid = await generate(0, 1, 1);
    console.log("cid", cid);
  };

  return (
    <div>
      <button type="button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};

export default GithubStatistics;
