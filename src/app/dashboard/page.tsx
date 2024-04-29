"use client";

export default function Dashboard() {
  function greetUser() {
    alert("A");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <button onClick={greetUser}>Bang</button>
    </div>
  );
}
