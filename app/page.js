'use client'
import React from 'react';
import { useState } from 'react';

function Page() {
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, des }]);
    setDes('');
    setTitle('');
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h1>No Task Available</h1>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between m-5 p-5 border-b border-black'>
          <div className='flex flex-col md:flex-row w-full md:w-1/2 justify-between'>
            <div>
              <h1>Title</h1>
              <h2 className='text-lg md:text-xl'>{t.title}</h2>
            </div>
            <div>
              <h1>Description</h1>
              <h3 className='text-sm md:text-base md:ml-2'>{t.des}</h3>
            </div>
           
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className='bg-red-500 hover:bg-red-600 rounded-full p-2 w-32'
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-center text-4xl'>
        My todo list
      </h1>

      <form onSubmit={submitHandler}>
        <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
          <input
            type='text'
            placeholder='Enter Task'
            className='bg-gray rounded m-2 md:m-10 text-black p-3 md:p-5 text-center border-2 border-black'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <input
            type='text'
            placeholder='Enter description'
            className='bg-gray rounded m-2 md:m-10 text-black p-3 md:p-5 text-center border-2 border-black'
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
          />

          <button className='bg-black text-white p-3 md:p-5 rounded m-2 md:m-5 w-32'>
            Add Task
          </button>
        </div>
      </form>

      <div className='bg-gray-300 p-2'>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default Page;
