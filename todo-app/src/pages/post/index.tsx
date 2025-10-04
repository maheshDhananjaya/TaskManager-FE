import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  users: User[];
};

const users = ({ users }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="my-4">Server Side Rendered Users</h2>
      <ul>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default users;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log({ users });
  return {
    props: {
      users,
    },
  };
}
