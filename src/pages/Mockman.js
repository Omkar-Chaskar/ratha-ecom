import Mockman from "mockman-js";
export default function MockmanComponent() {
  return (
    <div>
      <div>
        <h1>Mockman</h1>
      </div>
      <Mockman
        endpointsList={[
          "/api/test-todos",
          "/api/auth/signup",
          "/api/auth/login"
        ]}
      />
    </div>
  );
}
