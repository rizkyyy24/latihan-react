import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const user = useLogin();
  return (
    <div>
      <h1>Profile User</h1>
      <p>{user}</p>
    </div>
  );
};

export default ProfilePage;
