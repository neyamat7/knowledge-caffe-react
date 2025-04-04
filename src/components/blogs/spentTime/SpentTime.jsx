const SpentTime = ({ readTime = 0 }) => {
  return (
    <div className="border border-blue-800 rounded-lg py-5 px-10 text-blue-800 text-2xl font-semibold">
      <p>Spent time on read : {readTime} min</p>
    </div>
  );
};

export default SpentTime;
