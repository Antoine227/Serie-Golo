import { useEffect, useState } from "react";

interface Program {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

const Programs: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <img
            src={program.poster}
            alt={program.title}
            style={{ width: "200px" }}
          />
          <p>{program.synopsis}</p>
          <p>Country: {program.country}</p>
          <p>Year: {program.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Programs;
