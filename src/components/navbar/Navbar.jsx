import Profile from "../profile/Profile";

const navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-5 mt-6 border-b border-slate-400 pb-5">
      <h1 className="text-4xl font-bold">Knowledge Caffe</h1>

      {/* profile pic */}
      <Profile></Profile>
    </div>
  );
};

export default navbar;
