const Profile = ({ url }) => {
  const photoUrl =
    url ||
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

  return (
    <div className="avatar">
      <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
        <img src={photoUrl} />
      </div>
    </div>
  );
};

export default Profile;
