const reasons = [
  {
    icon: "■",
    title: "CONNECT",
    description: "Meet the minds of our network that are shaping our ecosystem.",
  },
  {
    icon: "■",
    title: "IDEATE",
    description:
      "Fuel your next big idea through spontaneous hallway conversations to curated hackathons and panels.",
  },
  {
    icon: "■",
    title: "GROW",
    description:
      "Learn from those scaling decentralized systems and reshaping global infrastructure",
  },
];

export default function WhyAttend() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h2 className="mb-16 text-4xl font-normal text-black">Why attend</h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {reasons.map((reason, index) => (
          <div key={index} className="space-y-4">
            <div className="text-4xl text-purple-500">{reason.icon}</div>
            <h3 className="font-mono text-sm uppercase tracking-widest text-black">
              {reason.title}
            </h3>
            <p className="text-lg leading-relaxed text-black/70">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
