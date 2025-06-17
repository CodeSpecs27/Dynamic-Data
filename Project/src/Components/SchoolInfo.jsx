export const SchoolInfo = ({ info }) => {
  const renderInfo = (obj) =>
    Object.entries(obj).map(([key, value]) =>
      typeof value === "object" && value !== null ? (
        renderInfo(value)
      ) : (
        <p key={key}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
          {value}
        </p>
      )
    );

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md mb-6">
      {renderInfo(info)}
    </div>
  );
};
