import RoadmapCard from "@/components/RoadmapCard";
import styled from "styled-components"

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  @media screen and (max-width:553px){
    margin-bottom: 30px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  line-height: 1;
  font-size: 64px;
  letter-spacing: 2px;
  @media screen and (max-width: 768px){
    text-align: center;
  }
  @media screen and (max-width: 358px){
    font-size: 50px;
  }
`;

const Titlespan = styled.span`
  color: #27cd49
`;

const Data = [
  {
   step: "Phase 01",
   name: "Planning",
   desc: "We have been managing Bids and writing Tenders for 10+ years. This new platform however will disrupt the market and this requires careful planning.",
   programme: ["Development programme", "Community programme", "Marketing Strategy"]
  },
  {
   step: "Phase 02",
   name: "SOFTWARE",
   desc: "We will train our AI models against 10+ years of tender writing data and expertise used to secure over £2.5 billion since establishment.",
   programme: ["AI model analysis", "Curated data sets", "Infrastructure development"]
  },
  {
   step: "Phase 03",
   name: "PLATFORM",
   desc: "The AI SaaS platform will maintain features tailored to bid writing, analysis, library frameworks and AI driven response optimisations.",
   programme: ["Initiate development", "Optimise for cybersecurity", "Test and iterate"]
  },
  {
   step: "Phase 04",
   name: "NETWORK",
   desc: "Establish a network of Tender AI Agents to source tender materials and provide them with the necessary training required to match suppliers with buyers.",
   programme: ["AI Agent strategy", "Tender portal development", "Feedback loop structure"]
  },
  {
   step: "Phase 05",
   name: "LAUNCH",
   desc: "Roll out the AI SaaS platform, leveraging targeted marketing strategies to attract microenterprise, SMEs, large suppliers and tender agents.",
   programme: ["Release platform", "Engage users", "Retain customers"]
  },
  {
   step: "Phase 06",
   name: "AI AGENTS",
   desc: "As we gather data and learn how tender agents learn we will develop Large Action Models (LAMs) specific to Tendering, to attain exponential market share.",
   programme: ["Big data analysis", "AI model training", "Marketing implementation"]
  },
]


const Home = () => {
  return (
    <>
      <div className="container mt-5">
      <HeadingWrapper>
          <Title>BidwiseAI's <Titlespan>Roadmap</Titlespan></Title>
        </HeadingWrapper>
        <section className="container mb-5">
        <div className="row">
         {
          Data.map((item, index) => (
            <RoadmapCard key={index} item={item} />
          ))
         }
        </div>
        </section>
      </div>

    </>
  );
}

export default Home;

