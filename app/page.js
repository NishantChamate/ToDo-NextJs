"use client";
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };

  let renderTask = <h2>No Task Available</h2>;
  mainTask.map((t, i) => {
    return (
      <div>
        <h5>{t.title}</h5>
        <h6>{t.desc}</h6>
      </div>
    );
  });

  return (
    <>
      <h1 className="bg-black text-white p-10 text-5xl font-bold text-center">
        My ToDo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border border-zinc-800 m-8 px-4 py-2"
          placeholder="Enter Title Here"
          value={title}
          onChange={() => {
            setTitle(console.log(e.target.value));
          }}
        />
        <input
          type="text"
          className="text-2xl border border-zinc-800 m-8 px-4 py-2"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
