import { CenterColumn } from "./layout/CenterColumn";
type CardProps = { title: string; description: string };

const copy: CardProps[] = [
  {
    title: "Prototyping",
    description:
      "Take your product idea from concept to reality. Bring your product to market quickly and efficiently.",
  },
  {
    title: "Process Optimization",
    description: "Simplify your data management and improve your productivity.",
  },
  {
    title: "Modernize your outreach",
    description:
      "Elevate your outreach strategy and stay ahead of the competition with website and email automations",
  },
];

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="flex-1 p-4 md:p-6 rounded-lg text-black">
      <h3 className="h4 md:h-20 font-semibold">{title}</h3>
      <p className="p">{description}</p>
    </div>
  );
};

export const Solutions = () => {
  return (
    <div className="bg-blue-300">
      <CenterColumn>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-12 ]">
          {copy.map((card, idx) => (
            <Card key={idx} {...card}></Card>
          ))}
        </div>
      </CenterColumn>
    </div>
  );
};
