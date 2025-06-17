export const StudentDetails = ({ student }) => {
  let mark;
  if (student) {
    mark = student.grade;
  }

  const fieldMap = {
    id: "Roll No.",
    math: "Mathematics",
    physics: "Physics",
    chemistry: "Chemistry",
  };

  return (
    <div className="w-full md:w-1/2">
      {student ? (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
          <p>
            <strong>{fieldMap.id} : </strong>
            {student.id}
          </p>
          {Object.entries(mark).map(([key, value]) => (
            <p key={key}>
              <strong>
                {fieldMap[key]
                  ? fieldMap[key]
                  : key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                :{" "}
              </strong>
              {value}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Please select a student to see details.</p>
      )}
    </div>
  );
};
