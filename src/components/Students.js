import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_STUDENTS = gql`
  query GETALLSTUDENTS {
    Students {
      name
      id
      post
      email
      age
    }
  }
`;

function Students() {
  const { loading, error, data } = useQuery(GET_STUDENTS);
  if (loading) return <h1>Loading.....</h1>;
  if (error) return <h1>ERROR</h1>;

  const { Students } = data;
  console.log(data);
  return (
    <div>
      <table border="2px" width="500">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Post</th>
        </tr>
        {Students.map((std) => {
          return (
              
            <tr key={std.id}>
              <td>{std.name}</td>
              <td>{std.age}</td>
              <td>{std.email}</td>
              <td>{std.post}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
