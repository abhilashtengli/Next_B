import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="grid place-content-center h-screen">
      <div className="border p-5 w-fit space-y-2 rounded-lg shadow-lg">
        <h1>
          Name : {userData.username}
        </h1>
        <h1>
          Email :{userData.email}
        </h1>
      </div>
    </div>
  );
}
