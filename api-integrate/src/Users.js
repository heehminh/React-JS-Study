import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data를 추출하여 반환하는 함수
async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("getUsers- 모든 사용자 데이터 호출");
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers, [], true);
  // refetch (useAsync 에서 리턴된 fetchData)

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러발생</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시불러오기</button>
      {userId && <User id={userId} />}
    </div>
  );
}

export default Users;
