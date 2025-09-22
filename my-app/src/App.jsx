import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components
const Hello = ({ name }) => <h2>Hello, {name}!</h2>;

const Hello2 = ({ name, age }) => (
  <h2>Hello {name}, my age is {age}</h2>
);

const Home = () => <h2>Home Component!</h2>;
const About = () => <h2>About Component!</h2>;
const Contact = () => <h2>Contact Component!</h2>;

// Counter 1
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Counter 2
const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>React State Management Demo</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>
        ➕ Increase
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>
        ➖ Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ margin: "5px" }}>
        🔄 Reset
      </button>
    </div>
  );
};

// useEffect Example
function UseEffectEg() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`; // ✅ Fixed
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>React useEffect Hook Demo</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

// Posts API Example
function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading posts...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts from API (Axios Demo)</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Users API Example
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

// Router Demo
function App2() {
  return (
    <Router>
      <nav style={{ margin: "10px" }}>
        <Link to="/home" style={{ margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
        <Link to="/hello" style={{ margin: "10px" }}>Hello</Link>
        <Link to="/counter" style={{ margin: "10px" }}>Counter</Link>
        <Link to="/postlist" style={{ margin: "10px" }}>Posts</Link>
        <Link to="/userlist" style={{ margin: "10px" }}>Users</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hello" element={<Hello name="Yoshitha_2400031087" />} />
        <Route path="/counter" element={<Counter2 />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </Router>
  );
}

// Main App
const App = () => {
  const d = new Date();
  const a = 10, b = 20;

  return (
    <div>
      <h1>Congratulations, you completed your first React app!</h1>
      <p>Hello Time = {d.toString()}</p>
      <p>{a} + {b} = {a + b}</p>

      {/* Demo Components */}
      <Home />
      <About />
      <Contact />
      <Hello name="bhavani_2400030813" />
      <Hello2 name="Alice" age="13" />
      <Hello2 name="Jack" age="25" />
      <Counter />+3+
      <Counter2 />
      <UseEffectEg />
      <UserList />
      <PostList />
      <App2 />
    </div>
  );
};

export default App;
