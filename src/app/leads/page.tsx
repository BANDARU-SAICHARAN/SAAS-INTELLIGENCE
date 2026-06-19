export default function LeadsPage() {
  const leads = [
    {
      name: "John Doe",
      company: "Google",
      email: "john@gmail.com",
      status: "Hot",
      score: 92,
    },
    {
      name: "Sarah Lee",
      company: "Microsoft",
      email: "sarah@gmail.com",
      status: "Warm",
      score: 75,
    },
    {
      name: "Mike Ross",
      company: "Amazon",
      email: "mike@gmail.com",
      status: "Cold",
      score: 45,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Leads</h1>

      <div className="bg-white rounded-lg shadow border">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Score</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.company}</td>
                <td className="p-4">{lead.email}</td>
                <td className="p-4">{lead.status}</td>
                <td className="p-4">{lead.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}