// import { Children } from 'react';

export const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

// {
//   "title": "Phonebook",
//   "children": "<Input />"
// }
