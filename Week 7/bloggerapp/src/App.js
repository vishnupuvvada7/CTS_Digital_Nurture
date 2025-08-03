import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [selected, setSelected] = useState("");

  // 1. Element Variable Method
  let content;
  if (selected === "book") {
    content = <BookDetails />;
  } else if (selected === "blog") {
    content = <BlogDetails />;
  } else if (selected === "course") {
    content = <CourseDetails />;
  } else {
    content = <p>Please select a section to view details.</p>;
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Blogger App</h1>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setSelected("book")}>Show Book</button>
        <button onClick={() => setSelected("blog")}>Show Blog</button>
        <button onClick={() => setSelected("course")}>Show Course</button>
        <button onClick={() => setSelected("")}>Clear</button>
      </div>

      {/* 2. Rendering using element variable */}
      {content}

      {/* 3. Ternary operator method */}
      <hr />
      <h3>Using Ternary Operator:</h3>
      {selected === "book" ? <BookDetails /> : selected === "blog" ? <BlogDetails /> : selected === "course" ? <CourseDetails /> : <p>Nothing selected</p>}

      {/* 4. Short-circuit operator */}
      <hr />
      <h3>Using Short-Circuit &&:</h3>
      {selected === "book" && <BookDetails />}
      {selected === "blog" && <BlogDetails />}
      {selected === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
