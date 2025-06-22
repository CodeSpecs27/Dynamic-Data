export const StudentSelector = ({ students, selectedId, setSelectedId }) => {
  return (
    <div className="w-full md:w-1/2">
      <label htmlFor="studentSelect" className="lock mb-2 font-semibold">
        Select a Billionaire :
      </label>
      <select
        id="studentSelect"
        className="w-full p-2 border rounded"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
      >
        <option value="">Select a Billionaire</option>
        {students.map((student) => (
          <option key={student.id} value={student.id}>
            {student.id}
          </option>
        ))}
      </select>
    </div>
  );
};
